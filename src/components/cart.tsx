import { FC } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator'

export const Cart: FC = () => {
  const cartItemsCount = 1
  return (
    <Sheet>
      <SheetTrigger className="group flex items-center p-2 -m-2">
        <ShoppingCart
          aria-hidden={true}
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />

        <span className="text-sm font-medium ml-2 text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>

      <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>

        {cartItemsCount > 0 ? (
          <>
            <div className="flex flex-col w-full pr-6">
              cart Items
              <div className="space-y-4 pr-6">
                <Separator />

                <div className="space-y-1.5 pr-6">
                  <div className="flex">
                    <span className="flex-1">Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="flex">
                    <span className="flex-1">Transaction Fee</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
