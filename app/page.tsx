'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { tt } from '@/app/utils/i18n/i18n'
import BackgroundDynamic from '@/app/components/BackgroundDynamic'
import InpageJumpLink from '@/app/components/InpageJumpLink'
import { useEffect } from 'react'

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

  useEffect(() => {
    function isElementInOneThirdTop() {
      const element = document.getElementById('about')

      if (element) {
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight
        const threshold = viewportHeight / 3

        return elementTop <= threshold
      } else {
        return false
      }
    }

    function handleScroll() {
      console.log(isElementInOneThirdTop())
    }

    // Add a scroll event listener to check the element's position on scroll
    window.addEventListener('scroll', handleScroll)

    // Initial check when the component mounts
    console.log(isElementInOneThirdTop())

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          <main className={'pt-24 lg:w-1/2 lg:py-24'} id={'content'}>
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <p>{tt('aboutContent')}</p>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
