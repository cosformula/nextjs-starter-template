import Router from '@koa/router'

const router = new Router()

router.get('/api/test', async ctx => {
  ctx.status = 200
  ctx.body = { success: true }
})

export default router
