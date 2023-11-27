'use client'
import { FC } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PRODUCT_CATEGORIES } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleIsOpen: () => void
  isOpen: boolean
  anyIsOpen: boolean
}

export const NavItem: FC<NavItemProps> = ({
  category,
  anyIsOpen,
  handleIsOpen,
  isOpen,
}) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          variant={isOpen ? 'secondary' : 'ghost'}
          onClick={handleIsOpen}
          className="gap-1.5"
        >
          {category.label}

          <ChevronDown
            className={cn('transition-all h-4 w-4 text-muted-foreground', {
              '-rotate-180': isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            'text-sm text-muted-foreground top-full inset-x-0 absolute',
            {
              'animate-in slide-in-from-top-5 fade-in-10': !anyIsOpen,
            },
          )}
        >
          <div
            className="absolute inset-0 bg-white top-1/2 shadow"
            aria-hidden={'true'}
          />

          <div className="relative bg-white">
            <div className="px-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="grid grid-cols-3 gap-x-8 col-span-4 col-start-1">
                  {category.featured.map((feature) => (
                    <div
                      className="group relative text-base sm:text-sm"
                      key={feature.name}
                    >
                      <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden group-hover:opacity-75">
                        <Image
                          src={feature.imageSrc}
                          className="object-cover object-center"
                          fill
                          alt={feature.name}
                        />
                      </div>

                      <Link
                        href={feature.href}
                        className="font-medium text-gray-900 block mt-6"
                      >
                        {feature.name}
                      </Link>

                      <p className="mt-1" aria-hidden={true}>
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
