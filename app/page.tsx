'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { tt } from '@/app/utils/i18n/i18n'
import BackgroundDynamic from '@/app/components/BackgroundDynamic'
import InpageJumpLink from '@/app/components/InpageJumpLink'

export default function Home() {
  const inpageJumpLinks = [
    {
      href: '#about',
      title: tt('about'),
    },
    {
      href: '#experience',
      title: tt('experience'),
    },
    {
      href: '#education',
      title: tt('education'),
    },
  ]

  return (
    <>
      <BackgroundDynamic />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href={'/'}>Jacques Nguyen</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {tt('jobTitle')}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{tt('leading')}</p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {inpageJumpLinks.map(item => {
                    return (
                      <InpageJumpLink
                        key={item.href}
                        href={item.href}
                        title={item.title}
                      />
                    )
                  })}
                </ul>
              </nav>
            </div>
          </header>
          <main className={styles.main}></main>
        </div>
      </div>
    </>
  )
}
