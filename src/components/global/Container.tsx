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
    <div className={clsx('container p-0 mx-auto xl:px-6', className)}>
      {children}
    </div>
  )
}

export default Container