import React, { FC, PropsWithChildren } from 'react'
import Navbar from '~/components/navbar/Navbar'
import { Footer } from '~/components/global'

const PageBox: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default PageBox