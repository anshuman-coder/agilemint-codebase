import React from 'react'
import { PageBox, PageHelmet } from '~/components/global'
import Hero from '~/components/home/Hero'

export default function Home() {
  return (
    <>
      <PageHelmet />
      <PageBox>
        <Hero />
      </PageBox>
    </>
  )
}
