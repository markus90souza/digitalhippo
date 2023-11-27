import { FC } from 'react'
import Link from 'next/link'
import { Icons, Container, NavItems } from '@/components'

export const Navbar: FC = () => {
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
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}
