import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import { Container } from '~/components/global'
import { ChevronUp } from 'lucide-react'
import clsx from 'clsx'

const Faq = () => {
  return (
    <Container className='!p-0'>
      <div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
        {faqdata.map((item, index) => (
          <div key={item.question} className='mb-5'>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton as='div' className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200'>
                    <span>{item.question}</span>
                    <ChevronUp
                      className={clsx(
                        'w-5 h-5 text-indigo-500',
                        !open && 'transform rotate-180',
                      )}
                    />
                  </DisclosureButton>
                  <DisclosurePanel as='div' className='px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300'>
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: 'What services do you offer?',
    answer: 'We provide a full range of IT services, including software development, IT consulting, network management, cybersecurity, cloud solutions, and tech support.',
  },
  {
    question: 'How do you ensure your services are top-notch?',
    answer: 'Our team follows best practices, uses the latest technology, and undergoes continuous training to deliver high-quality results.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We have experience across various industries, including finance, healthcare, retail, education, and tech.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We take your data security seriously, implementing strong measures and following industry standards to protect your information.',
  },
  {
    question: 'How can I get in touch with you?',
    answer: 'Schedule a meet with our team on Calendly or reach out to us at [email protected] for further assistance.',
  },
]

export default Faq