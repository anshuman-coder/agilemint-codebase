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
          title={`What our clients Say about us!`}
          align='center'
        >
          <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
            Discover how our innovative solutions have transformed businesses. Read our clients success stories
          </p>
        </SectionWrapper>
        <Testimonials />

        <SectionWrapper preTitle='FAQ' title='Frequently Asked Questions' align='center' className='pt-10 md:pt-16 lg:pt-20'>
          <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </p>
        </SectionWrapper>
        <Faq />
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
  title: 'Additional perks for why to choose us',
  desc: 'Harness the power of innovation and expertise to drive your business forward with our customized IT solutions.',
  image: <Image src='/assets/benefit-two.png' alt='benefit-two' width='521' height='482' layout='intrinsic'  />,
  bullets: [
    {
      title: 'Branding',
      desc: 'We craft memorable branding that elevates your identity, leaving a lasting impact on your audience.',
      icon: <Smartphone />,
    },
    {
      title: 'Digital MARKETING',
      desc: 'We boost your brand with strategic digital marketing, driving online growth and engagement.',
      icon: <SlidersHorizontal />,
    },
    {
      title: 'Financial Modeling and startup fundraising',
      desc: 'We drive growth through expert financial modeling and startup fundraising, helping you scale efficiently.',
      icon: <Sun />,
    },
  ],
}
