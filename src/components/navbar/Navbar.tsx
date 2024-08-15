import { Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, Fragment, useMemo } from 'react'
import ThemeSwitch from '~/components/navbar/ThemeSwitch'
import { navigation } from '~/constants'
import { NavItemType } from '~/types'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Navbar = () => {
  const { theme } = useTheme()

  const logoUrl = useMemo(
    () => theme === 'dark' ? '/assets/dark-logo.png' : '/assets/light-logo.png',
    [theme],
  )

  return (
    <div className='w-full z-40 fixed top-0 left-0 bg-white dark:bg-trueGray-900'>
      <nav className='relative max-w-screen-2xl flex flex-wrap items-center justify-between py-2 px-4 lg:py-4 lg:px-8 mx-auto lg:justify-between xl:px-6 laptop:px-0'>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between gap-x-4 w-full lg:w-auto !bg-white dark:!bg-trueGray-900'>
                <Link href='/'>
                  <div className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                    <Image
                      src={logoUrl}
                      alt='logo'
                      width={150}
                      height={150}
                    />
                  </div>
                </Link>
                <div className='flex lg:hidden justify-center items-center gap-6'>
                  <div className='flex justify-center items-center'>
                    <ThemeSwitch />
                  </div>
                  <DisclosureButton
                    aria-label='Toggle Menu'
                    className='px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'
                  >
                    <svg
                      className='w-6 h-6 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'>
                      {open && (
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                        />
                      )}
                      {!open && (
                        <path
                          fillRule='evenodd'
                          d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                        />
                      )}
                    </svg>
                  </DisclosureButton>
                </div>
                <Transition
                  enter='transition duration-300 ease-out'
                  enterFrom='transform -translate-y-full opacity-50'
                  enterTo='transform translate-y-0 opacity-100'
                  leave='transition duration-300 ease-in'
                  leaveFrom='transform translate-y-0 opacity-100'
                  leaveTo='transform -translate-y-full opacity-0'
                  as={Fragment}
                >
                  <DisclosurePanel
                    as='div'
                    className='flex flex-col z-10 lg:flex-row flex-wrap w-full my-5 lg:hidden transform transition-all ease-in-out'
                  >
                    <>
                      {navigation.map((item) => (
                        <MobileNavItem key={item.id} item={item} />
                      ))}
                      <div className='flex justify-center items-center'>
                        <div className='w-full max-w-sm px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5'>
                          Contact Us
                        </div>
                      </div>
                    </>
                  </DisclosurePanel>
                </Transition>
              </div>
            </>
          )}
        </Disclosure>

        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu) => (
              <NavItem key={menu.id} item={menu} />
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 gap-x-6 lg:flex nav__item'>
          <Link href='/'>
            <div className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
              Contact Us
            </div>
          </Link>

          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}

interface NavItemProps {
  item: NavItemType,
  anchor?: 'bottom start' | 'right start'
}

const NavItem: FC<NavItemProps> = ({
  item: {
    id,
    label,
    route,
    menuItems = [],
  },
  anchor = 'bottom start',
}) => {

  return (
    menuItems.length > 0 ? (
      <Popover className='relative'>
        {({ open }) => (
          <>
            <PopoverButton as='div' className='border-none cursor-pointer'>
              <li className='mr-3 nav__item'>
                <div className=' text-center inline-flex flex-row justify-start items-center gap-x-1 px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none'>
                  <span>{label}</span>
                  <span>{open ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}</span>
                </div>
              </li>
            </PopoverButton>
            <PopoverPanel transition as='ul' anchor={anchor} className='flex flex-col justify-start items-start gap-y-4 mt-2 py-4 px-8 z-50 bg-gray-200 dark:bg-gray-800 rounded-md border border-solid border-gray-200 dark:border-gray-800 transition duration-200 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0'>
              {menuItems.map(item => <NavItem key={item.id} item={item} />)}
            </PopoverPanel>
          </>
        )}
      </Popover>
    ) : (
      <li className='mr-3 nav__item'>
        <Link href={route}>
          <div className='text-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none'>
            {label}
          </div>
        </Link>
      </li>
    )
  )
}

const MobileNavItem: FC<NavItemProps> = ({
  item: {
    id,
    label,
    route,
    menuItems = [],
  },
}) => {
  return (
    menuItems.length > 0 ? (
      <Disclosure as='div'>
        {({ open }) => (
          <div className='w-full flex flex-col items-center p-0 m-0'>
            <DisclosureButton as='div' className='w-full'>
              <div className='w-full flex justify-center gap-x-1 items-center px-0 lg:px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                <span>{label}</span>
                <span>{open ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}</span>
              </div>
            </DisclosureButton>
            <DisclosurePanel as='div' className='max-w-sm flex flex-col bg-gray-200 dark:bg-gray-800 rounded-md py-4 px-8'>
              {menuItems.map(_item => <MobileNavItem key={id} item={_item} />)}
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    ) : (
      <Link key={id} href={route}>
        <div className='w-full flex justify-center items-center px-0 lg:px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
          {label}
        </div>
      </Link>
    )
  )
}

export default Navbar