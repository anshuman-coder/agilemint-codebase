import React from 'react'
import { PageBox, PageHelmet, SectionWrapper } from '~/components/global'
import Hero from '~/components/home/Hero'

export default function Home() {
  return (
    <>
      <PageHelmet />
      <PageBox>
        <Hero />
        <SectionWrapper
          preTitle='Nextly Benefits'
          title='Why should you use this landing page'
          align='center'
        >
          Nextly is a free landing page & marketing website template for startups
          and indie projects. Its built with Next.js & TailwindCSS. And its
          completely open-source.
        </SectionWrapper>
      </PageBox>
    </>
  )
}
