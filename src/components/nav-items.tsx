'use client'

import { PRODUCT_CATEGORIES } from '@/data'
import { FC, useEffect, useRef, useState } from 'react'
import { NavItem } from './nav-item'

import { useOnClickOutside } from 'usehooks-ts'

export const NavItems: FC = () => {
  const [active, setActive] = useState<null | number>(null)

  const navRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(navRef, () => setActive(null))

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <div className="h-full flex gap-4" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (active === index) {
            setActive(null)
          } else {
            setActive(index)
          }
        }

        const isOpen = index === active
        const anyIsOpen = active !== null

        return (
          <NavItem
            isOpen={isOpen}
            category={category}
            handleIsOpen={handleOpen}
            key={category.value}
            anyIsOpen={anyIsOpen}
          />
        )
      })}
    </div>
  )
}
