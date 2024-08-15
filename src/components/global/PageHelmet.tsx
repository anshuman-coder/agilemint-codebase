import Head from 'next/head'
import React, { FC } from 'react'

interface PageHelmetProps {
  title?: string
}

const PageHelmet: FC<PageHelmetProps> = ({
  title = '',
}) => {
  return (
    <Head>
      <title>AgileMint {title ? `| ${title}` : ''}</title>
      <meta
        name='description'
        content='Nextly is a free landing page template built with next.js & Tailwind CSS'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default PageHelmet