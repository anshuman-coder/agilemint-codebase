import Image from 'next/image'
import React from 'react'
import { Benefits, PageBox, PageHelmet, SectionWrapper } from '~/components/global'
import Hero from '~/components/home/Hero'
import * as Types from '~/types'
import { Smile, Smartphone, ChartNoAxesCombined, MousePointerClick, SlidersHorizontal, Sun, Section } from 'lucide-react'




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
          <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
            Nextly is a free landing page & marketing website template for startups
            and indie projects. Its built with Next.js & TailwindCSS. And its
            completely open-source.
          </p>
        </SectionWrapper>
        <Benefits data={BenefitsOne} />
        <Benefits imgPos='right' data={BenefitsTwo} />
        <SectionWrapper
          preTitle='Testimonials'
          title={`Here's what our customers said`}
          align='center'
        >
          <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
            Testimonails is a great way to increase the brand trust and awareness.
            Use this section to highlight your popular customers.
          </p>
        </SectionWrapper>
      </PageBox>
    </>
  )
}

const BenefitsOne: Types.Benefits = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: <Image src='/assets/benefit-one.png' alt='benefit-one' width='521' height='482' layout='intrinsic' />,
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Then explain the first point breifly in one or two lines.',
      icon: <Smile />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <ChartNoAxesCombined />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <MousePointerClick />,
    },
  ],
}

const BenefitsTwo: Types.Benefits = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: <Image src='/assets/benefit-two.png' alt='benefit-two' width='521' height='482' layout='intrinsic'  />,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <Smartphone />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <SlidersHorizontal />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <Sun />,
    },
  ],
}
