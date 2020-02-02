import React from 'react'
import Meta from '@/components/meta'

export const Page = ({ children, title }: any) => (
  <div>
    <Meta title={title} />
    {children}
  </div>
)

export default Page
