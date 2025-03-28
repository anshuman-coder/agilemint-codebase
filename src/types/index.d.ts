import { ReactElement, ReactNode } from 'react'

export type Benefits = {
  title: string
  desc: string
  image: JSX.Element | ReactNode
  bullets: BenefitsBullets[]
}

export type BenefitsBullets = {
  title: string
  desc: string
  icon: ReactElement
}

export type NavItemType = {
  id: string
  label: string
  route: string
  menuItems?: NavItemType[]
}