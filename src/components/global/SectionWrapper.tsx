import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { Container } from '~/components/global'

interface SectionWrapper extends PropsWithChildren {
  title?: string
  preTitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

const SectionWrapper: FC<SectionWrapper> = ({
  title = '',
  preTitle = '',
  align = 'left',
  children,
  className = '',
}) => {
  return (
    <Container
      className={
        clsx(
          'flex w-full flex-col mt-4',
          'items-center justify-center',
          align === 'center' && 'text-center',
          align === 'left' && 'text-left',
          align === 'right' && 'text-right',
          className,
        )
      }
    >
      {
        preTitle && (
          <div className='text-sm font-bold tracking-wider text-indigo-600 uppercase'>
            {preTitle}
          </div>
        )
      }

      {
        title && (
          <h2 className='max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>
            {title}
          </h2>
        )
      }
      {
        children
      }
    </Container>
  )
}

export default SectionWrapper