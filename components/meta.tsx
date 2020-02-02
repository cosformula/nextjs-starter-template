import Head from 'next/head'
import React from 'react'

export const Meta = ({ title }: { title?: string } = { title: '' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <style global jsx>
        {`
          html {
            padding: 0;
            margin: 0;
          }
          body {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
export default Meta
