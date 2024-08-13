import Image from 'next/image'
import React, { FC } from 'react'
import { Container, Mark } from '~/components/global'

const Testimonials = () => {
  return (
    <Container>
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        <div className='lg:col-span-2 xl:col-auto'>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
            <p className='text-2xl leading-normal '>
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image='/assets/user1.jpg'
              name='Sarah Steiner'
              title='VP Sales at Google'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
            <p className='text-2xl leading-normal '>
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image='/assets/user2.jpg'
              name='Dylan Ambrose'
              title='Lead marketer at Netflix'
            />
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
            <p className='text-2xl leading-normal '>
              This is an <Mark>awesome</Mark> landing page template I{`'`}ve seen. I
              would use this for anything.
            </p>

            <Avatar
              image='/assets/user3.jpg'
              name='Gabrielle Winn'
              title='Co-founder of Acme Inc'
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

interface AvatarProps {
  title: string
  name: string
  image: string
}

const Avatar: FC<AvatarProps> = ({
  name,
  title,
  image,
}) => {
  return (
    <div className='flex items-center mt-8 space-x-3'>
      <div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
        <Image
          src={image}
          width='40'
          height='40'
          alt='Avatar'
          layout='responsive'
        />
      </div>
      <div>
        <div className='text-lg font-medium'>{name}</div>
        <div className='text-gray-600 dark:text-gray-400'>{title}</div>
      </div>
    </div>
  )
}

export default Testimonials