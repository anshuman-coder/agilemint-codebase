import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PageBox, PageHelmet } from '~/components/global'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageHelmet />
      <PageBox />
    </>
  )
}
