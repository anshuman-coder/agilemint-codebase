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
        content='Your Tech Partner Specializing in Innovative Tech Products and Custom Software Solutions for Startups.'
      />
      <meta name='keywords' content='IT solutions, web development, app development, digital marketing, branding, startup fundraising, financial modeling'/>
      <meta name='author' content='AgileMint' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default PageHelmet