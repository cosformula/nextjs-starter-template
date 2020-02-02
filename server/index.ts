import morgan from 'koa-morgan'
import userAgent from 'koa2-useragent'
import Koa from 'koa'
import router from './router'
import { parse } from 'url'
import next from 'next'
import cors from '@koa/cors'
import { HOST, PORT, IS_DEV } from '../utils/consts'

const server = new Koa()
const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()

async function start () {
  server.use(cors())

  server.use(router.routes())

  server.use(
    morgan('tiny', {
      skip: req =>
        req.url === '/health' || req.url.indexOf('/.well-known') !== -1
    })
  )

  app.prepare().then(() => {
    server.use(async (ctx, next) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })
  })

  server.use(async (ctx, next) => {
    if (ctx.path === '/apple-app-site-association') {
      ctx.redirect('/.well-known/apple-app-site-association')
    } else {
      await next()
    }
  })

  server.use(userAgent())

  server.use(async (ctx, next) => {
    if (ctx.path === '/health') {
      ctx.response.body = {
        success: true
      }
    } else {
      await next()
    }
  })

  server.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      const parsedUrl = parse(ctx.req.url, true)
      handle(ctx.req, ctx.res, parsedUrl)
    })
  })

  server.listen(PORT, HOST)
}

start()
