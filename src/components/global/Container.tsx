import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container: FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={clsx('max-w-screen-2xl px-6 md:px-8 mx-auto xl:px-10', className)}>
      {children}
    </div>
  )
}

export default Container