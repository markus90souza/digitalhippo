import { FC } from 'react'
import Link from 'next/link'
import { Icons, Container, NavItems, Cart } from '@/components'
import { buttonVariants } from '@/components/ui/button'

export const Navbar: FC = () => {
  const user = null
  return (
    <div className="bg-white h-16 top-0 inset-x-0 z-50 sticky">
      <header className="bg-white relative">
        <Container>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* Mobile */}

              <div className="flex ml-4 lg:ml-0">
                <Link href={'/'}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden lg:block lg:ml-8 z-50 lg:self-stretch">
                <NavItems />
              </div>

              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      className={buttonVariants({ variant: 'ghost' })}
                      href={'/sign-in'}
                    >
                      Entrar
                    </Link>
                  )}

                  {user ? null : (
                    <span
                      className="h-6 w-px bg-gray-200"
                      aria-hidden={'true'}
                    />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      className={buttonVariants({ variant: 'ghost' })}
                      href={'/sign-up'}
                    >
                      Criar conta
                    </Link>
                  )}

                  {user ? null : (
                    <span
                      className="h-6 w-px bg-gray-200"
                      aria-hidden={'true'}
                    />
                  )}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden={'true'}
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}
