import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
