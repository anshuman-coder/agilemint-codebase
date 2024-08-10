import React, { FC, PropsWithChildren } from 'react'
import Navbar from '~/components/navbar/Navbar'
import { Footer } from '~/components/global'

const PageBox: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className='w-full pt-28'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default PageBox