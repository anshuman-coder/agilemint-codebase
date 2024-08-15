import Image from 'next/image'
import React from 'react'
import { Hero, Testimonials, Faq } from '~/components/home'
import { Benefits, PageBox, PageHelmet, SectionWrapper } from '~/components/global'
import * as Types from '~/types'
import { Wrench, Smartphone, Sprout, Rocket, SlidersHorizontal, Sun, Handshake } from 'lucide-react'

export default function Home() {
  return (
    <>
      <PageHelmet title='Home' />
      <PageBox>
        <Hero />
        <SectionWrapper
          title='Why Choose Us'
          align='center'
          className='mb-6 lg:mb-12'
        />
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
        <Testimonials />
        {/* This section may be needed in the future

        <SectionWrapper preTitle='FAQ' title='Frequently Asked Questions' align='center'>
          <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </p>
        </SectionWrapper>
        <Faq /> */}
      </PageBox>
    </>
  )
}

const BenefitsOne: Types.Benefits = {
  title: 'Drive Success with Digital Innovation',
  desc: 'We deliver top-tier web development, captivating design, and strategic digital marketing to enhance your online presence. Our startup consulting and fundraising expertise help you launch and scale with confidence.',
  image: <Image src='/assets/benefit-one.png' alt='benefit-one' width='521' height='482' layout='intrinsic' />,
  bullets: [
    {
      title: 'Cutting-Edge Development',
      desc: 'Expert web and app development using the latest technologies for superior performance.',
      icon: <Wrench />,
    },
    {
      title: 'Innovative Design & Branding',
      desc: 'Captivating UI/UX and digital branding that enhances user experience and brand identity.',
      icon: <Sprout />,
    },
    {
      title: 'Digital Marketing',
      desc: 'Strategic digital marketing services to boost your online presence and drive growth, including SEO, SMM, and SEM.',
      icon: <Rocket />,
    },
    {
      title: 'Fundraising and Startup Consulting',
      desc: 'Comprehensive fundraising and startup services, such as financial modeling, pitch decks, teasers, and investor relations, will help you successfully launch and scale your business.',
      icon: <Handshake />,
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
