import Link from 'next/link'
import { Container } from '@/components/container'
import { Button, buttonVariants } from '@/components/ui/button'
import { perks } from '@/data'

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="flex max-w-3xl flex-col items-center py-20 mx-auto text-center">
          <h1 className="sm:text-6xl text-4xl font-bold tracking-tight text-gray-900">
            Your marketplace for high quality{' '}
            <span className="text-blue-600">Digital assets</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ex
            unde porro, velit ipsum blanditiis corporis! Quisquam eum
            praesentium dolor minima nobis omnis veniam sed dolores! Totam
            eveniet quisquam mollitia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href={'/products'}>
              Browse Trending
            </Link>

            <Button variant={'ghost'}>Your quality promise</Button>
          </div>
        </div>
      </Container>

      <section className="border-t border-gray-200 bg-gray-200">
        <Container className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:text-left md:items-start lg:block lg:text-center "
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 lg:mt-6 lg:ml-0 md:ml-4 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default HomePage
