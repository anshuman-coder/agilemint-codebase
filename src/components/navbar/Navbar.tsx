import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import ThemeSwitch from '~/components/navbar/ThemeSwitch'

const Navbar = () => {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog']

  const { theme } = useTheme()

  const logoUrl = useMemo(
    () => theme === 'dark' ? '/assets/dark-logo.png' : '/assets/light-logo.png',
    [theme]
  )

  return (
    <div className='w-full'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        {/* logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between gap-x-4 w-full lg:w-auto'>
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
                <div className='flex justify-center items-center gap-4'>
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
                <DisclosurePanel
                  as='div'
                  className='flex flex-col lg:flex-row flex-wrap w-full my-5 lg:hidden'
                >
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href='/'>
                        <div className='w-full flex justify-center items-center px-0 lg:px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                          {item}
                        </div>
                      </Link>
                    ))}
                    <Link href='/' className='flex justify-center items-center'>
                      <div className='w-full max-w-sm px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5'>
                        Get Started
                      </div>
                    </Link>
                  </>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>

        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='mr-3 nav__item' key={index}>
                <Link href='/' className=''>
                  <div className=' text-center inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none'>
                    {menu}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          <Link href='/'>
            <div className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
              Get Started
            </div>
          </Link>

          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}

export default Navbar