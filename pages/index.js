import Link from 'next/link'
import SVG from 'react-inlinesvg'

import ButtonLink from '../components/ButtonLink'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Layout from '../components/layout'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'

export default function Overview() {
  return (
    <Layout>
      <TitleAndMetaTags
        title='Overview'
        banner='https://og-image.planetscale.com/Documentation%20Overview.png?theme=dark&direction=row&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.planetscale.com%2Fimages%2Fps-logo-white-v2.svg'
      />

      <h1 className='text-3xl font-semibold'>ScyllaDB documentation</h1>
      <p className='mb-4 text-lg text-secondary'>
        Learn how to use ScyllaDB, the distributed NoSQL database, to power your application.
      </p>

      <div className='p-3 mb-3 border border-purple-100 rounded md:rounded-lg md:mb-4 bg-purple-50 dark:bg-purple-900 dark:border-purple-800'>
        <div className='mb-2' style={{ aspectRatio: '720 / 139' }}>
          <SVG src='/docs/img/internals/flow-diagram.svg' width='720' height='139' className='max-w-full' />
        </div>

        <h2 className='mb-1 text-xl font-semibold'>ScyllaDB&apos;s Architecture</h2>
        <p className='mb-2'>
          ScyllaDB is a distributed NoSQL database that is designed to scale horizontally and vertically.
        </p>
        <p>
          <ButtonLink href='/concepts/planetscale-workflow' variant='secondary'>
            Learn more
          </ButtonLink>
        </p>
      </div>

      <div className='grid grid-cols-1 gap-3 mb-4 lg:grid-cols-2'>
        <Link href='/tutorials/planetscale-quick-start-guide'>
          <a className='h-full p-3 border rounded hover:bg-secondary'>
            <div className='inline-block w-[24px] h-[24px]'>
              <Icon name='rocket' size='large' className='mb-2 text-blue' />
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>ScyllaDB quickstart guide</h3>
            <p className='text-secondary'>
              Deploy a database and learn the basics of using PlanetScale with an example.{' '}
            </p>
          </a>
        </Link>
        <Link href='/concepts/branching'>
          <a className='h-full p-3 border rounded hover:bg-secondary'>
            <div className='inline-block w-[24px] h-[24px]'>
              <Icon name='branch' size='large' className='mb-2 text-blue' />
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>Branching your database</h3>
            <p className='text-secondary'>Use live database branches for staging and production environments.</p>
          </a>
        </Link>
        <Link href='/concepts/connection-strings'>
          <a className='h-full p-3 border rounded hover:bg-secondary'>
            <div className='inline-block w-[24px] h-[24px]'>
              <Icon name='code' size='large' className='mb-2 text-blue' />
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>Connect</h3>
            <p className='text-secondary'>PlanetScale provides secure connection strings for your database branches.</p>
          </a>
        </Link>
        <Link href='/concepts/nonblocking-schema-changes'>
          <a className='h-full p-3 border rounded hover:bg-secondary'>
            <div className='inline-block w-[24px] h-[24px]'>
              <Icon name='schema-change' size='large' className='mb-2 text-blue' />
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>Non-blocking schema changes</h3>
            <p className='text-secondary'>Deploy and revert schema changes without downtime or locking.</p>
          </a>
        </Link>
      </div>

      <h2 className='mb-1 text-xl font-semibold'>Tutorials</h2>

      <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
        <Link href='/tutorials/connect-rails-app'>
          <a className='flex flex-col items-center h-full p-3 text-center border rounded hover:bg-secondary'>
            <div className='inline-block h-[32px]'>
              {/* <SVG src='/docs/img/internals/ruby-logo.svg' height={32} width={32} className='mb-2' /> */}
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>Rust</h3>
            <p className='text-secondary'>Learn how to connect your Rust application to a ScyllaDB cluster.</p>
          </a>
        </Link>
        <Link href='/tutorials/deploy-to-vercel'>
          <a className='flex flex-col items-center h-full p-3 text-center border rounded hover:bg-secondary'>
            <div className='inline-block h-[32px]'>
              {/* <SVG
                src='/docs/img/internals/vercel-logo.svg'
                height={32}
                width={37}
                className='mb-2 text-black dark:text-white'
              /> */}
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>University</h3>
            <p className='text-secondary'>Free Online Course on Scylla University.</p>
          </a>
        </Link>
        <Link href='/tutorials/automatic-prisma-migrations'>
          <a className='flex flex-col items-center h-full p-3 text-center border rounded hover:bg-secondary'>
            <div className='inline-block h-[32px]'>
              <SVG
                src='/docs/img/internals/prisma-logo.svg'
                height={32}
                className='mb-2 text-[#163C53] dark:text-white'
              />
            </div>
            <h3 className='text-lg font-semibold text-primary mb-sm'>Prisma</h3>
            <p className='text-secondary'>Learn how to use PlanetScale&apos;s automatic migrations with Prisma.</p>
          </a>
        </Link>
      </div>
      <Footer />
    </Layout>
  )
}
