import Head from 'next/head'
import React, { FC } from 'react'

interface PageHelmetProps {
  title?: string
  description?: string
  keywords?: string
}

const PageHelmet: FC<PageHelmetProps> = ({
  title = '',
  description = 'AgileMint - Your Trusted Technology Partner for Innovative Software Solutions, Digital Transformation, and Strategic Tech Consulting.',
  keywords = 'software development, digital transformation, custom software solutions, enterprise technology, IT consulting, web development, mobile applications, cloud solutions, startup technology, digital innovation',
}) => {
  const fullTitle = title ? `${title} | AgileMint` : 'AgileMint - Technology Solutions & Digital Innovation'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='AgileMint' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index, follow' />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <link rel='canonical' href='https://agilemint.com' />
    </Head>
  )
}

export default PageHelmet