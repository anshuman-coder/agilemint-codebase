

import React from 'react'
import { Container } from '../global'
import Image from 'next/image'

const MembersList = () => {
  return (
    <Container>
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3 py-10'>
        <div className='lg:col-span-2 xl:col-auto'>
          <MemberCard description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas iure exercitationem modi quis ad voluptate maxime, similique libero architecto?' designation='Full Stack Developer' image='/assets/user1.jpg' name='Anshuman Singh' />
        </div>
        <div className=''>
          <MemberCard description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas iure exercitationem modi quis ad voluptate maxime, similique libero architecto?' designation='Full Stack Developer' image='/assets/user1.jpg' name='Anshuman Singh' />
        </div>
        <div className=''>
          <MemberCard description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas iure exercitationem modi quis ad voluptate maxime, similique libero architecto?' designation='Full Stack Developer' image='/assets/user1.jpg' name='Anshuman Singh' />
        </div>
        <div className=''>
          <MemberCard description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas iure exercitationem modi quis ad voluptate maxime, similique libero architecto?' designation='Full Stack Developer' image='/assets/user1.jpg' name='Anshuman Singh' />
        </div>
        <div className=''>
          <MemberCard description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas iure exercitationem modi quis ad voluptate maxime, similique libero architecto?' designation='Full Stack Developer' image='/assets/user1.jpg' name='Anshuman Singh' />
        </div>

      </div>
    </Container>
  )
}


export default MembersList







interface MemberCardProps {
  image: string
  name: string
  designation: string
  description: string
}

function MemberCard({ description, designation, image, name }: MemberCardProps) {
  return <div className='flex flex-col justify-between w-full h-full bg-gray-100 p-5 md:p-10 lg:p-14 rounded-2xl dark:bg-trueGray-800'>
    <div className='flex flex-col md:flex-row max-sm:text-center items-center mb-8  md:space-x-5'>
      <div className='flex-shrink-0 overflow-hidden rounded-full w-24 h-24'>
        <Image
          src={image}
          width='100'
          height='100'
          alt='Avatar'
          layout='responsive'
        />
      </div>
      <div>
        <div className='text-2xl font-semibold'>{name}</div>
        <div className='text-gray-600 dark:text-gray-400'>{designation}</div>
      </div>
    </div>
    <p className='text-lg leading-normal max-sm:text-center'>
      {description}
    </p>

  </div>
}
