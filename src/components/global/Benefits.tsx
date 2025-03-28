import React, { FC } from 'react'
import * as Types from '~/types'
import { Container } from '~/components/global'
import Image from 'next/image'
import clsx from 'clsx'

interface BenefitsProps {
  imgPos?: 'right' | 'left'
  data: Types.Benefits
}

const Benefits: FC<BenefitsProps> = ({
  data,
  imgPos = 'left',
}) => {
  return (
    <>
      <Container className='flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap '>
        <div
          className={clsx(
            'flex items-center justify-center w-full lg:w-1/2',
            imgPos === 'right' && 'lg:order-1',
          )}
        >
          {
            data?.image && (
              <div>
                {data.image}
              </div>
            )
          }
        </div>

        <div className={clsx(
          'flex flex-wrap items-center w-full lg:w-1/2',
          imgPos === 'right' ? 'lg:justify-end' : '',
        )}>
          <div>
            <div className='flex flex-col w-full mt-4'>
              <h3 className='max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>
                {data.title}
              </h3>

              <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300'>
                {data.desc}
              </p>
            </div>
          </div>

          <div className='w-full mt-5'>
            {data.bullets.map((item, index) => (
              <Benefit key={index} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}


const Benefit: FC<Types.BenefitsBullets> = ({
  icon,
  title,
  desc,
}) => {
  return (
    <>
      <>
        <div className='flex items-start mt-8 space-x-3'>
          <div className='flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 '>
            {React.cloneElement(icon, {
              className: 'w-7 h-7 text-indigo-50',
            })}
          </div>
          <div>
            <h4 className='text-xl font-medium text-gray-800 dark:text-gray-200'>
              {title}
            </h4>
            <p className='mt-1 text-gray-500 dark:text-gray-400'>
              {desc}
            </p>
          </div>
        </div>
      </>
    </>
  )
}

export default Benefits