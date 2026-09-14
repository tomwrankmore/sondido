"use client";

import Image from "next/image";
import GooeyFilter from "./components/GooeyFilter/GooeyFilter";
import { ReactLenis } from "lenis/react";
import Hero from "./components/hero";
import AnimatedCopy from "./components/AnimatedCopy/AnimatedCopy";
import { useState } from "react";

export default function Home() {
  const [lightboxItem, setLightboxItem] = useState<{
    title: string;
    imgSrc: string;
  } | null>(null);

  const JOURNALIST_ITEMS = [
    {
      title: "Esquire",
      imgSrc: "/images/Esquire.png",
      link: "https://www.esquire.com/uk/life/travel/a36105425/the-best-spots-for-a-luxe-staycation/",
    },
    {
      title: "The Guardian",
      imgSrc: "/images/guardian_screentime.png",
      link: null,
    },
    {
      title: "The Guardian",
      imgSrc: "/images/guardian_mini.jpg",
      link: null,
    },
    {
      title: "The Woodland Trust",
      imgSrc: "/images/woodland_trust.jpg",
      link: null,
    },
    // {
    //   title: "Etihad - Olive Oil",
    //   imgSrc: "/images/oliveoil.jpg",
    //   link: "oliveoil.pdf",
    // },
  ];

  return (
    <>
      <ReactLenis root />
      <GooeyFilter />
      <Hero />

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="w-full max-w-7xl bg-white px-6 py-16 dark:bg-black sm:px-10 lg:px-16">
          <div className="grid gap-16">
            <section
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              id="about"
            >
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  01 / Discover
                </p>
                <AnimatedCopy mode="scroll">
                  <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl font-de-fonte-plus">
                    WHO WE ARE
                  </h2>
                </AnimatedCopy>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Sonido Media is a music and media company set up by journalist
                  Laura Martin and music producer James Rand.{" "}
                </p>

                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Laura has been a journalist for 15 years, and writes regularly
                  for Esquire, BBC, The Evening Standard and Vulture as well
                  writing for The Guardian, The i newspaper, Grazia and The
                  Independent. A pop culture specialist, she covers
                  entertainment, travel and food and drink stories.
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Alongside journalism, Laura - who has a previous background in
                  PR and marketing - is also a branded content writer, who has
                  worked on many campaigns for Guardian Labs, as well as the
                  Huff Post, Sainsburys' websites, and Red Bull. Recently, Laura
                  has worked as a cultural consultant for several US streamers
                  and a UK-US production studio.
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  James Rand is a mixing engineer and music producer. James has
                  mixed music by hundreds of global artists and engineered the
                  runway Fashion Week soundtracks for numerous luxury fashion
                  houses including Gucci, Fendi and Ferragamo.
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  The company's recent commissions have included New Balance,
                  Mirror Publishing, Fabric Records, Warner Music and National
                  Magazines.
                </p>
              </div>
              <div
                aria-label="Blue placeholder image"
                role="img"
                className="aspect-4/3 w-full rounded-2xl bg-linear-to-br from-sky-200 via-blue-400 to-indigo-700"
              />
            </section>
            <section
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              id="create"
            >
              <div
                className="order-2 md:order-1"
                aria-label="Orange placeholder image"
                role="img"
              >
                <div className="aspect-4/3 w-full rounded-2xl bg-linear-to-br from-amber-100 via-orange-400 to-rose-600" />
              </div>
              <div className="order-1 md:order-2">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  02 / Create
                </p>
                <AnimatedCopy mode="scroll">
                  <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl font-de-fonte-plus">
                    WHAT WE DO
                  </h2>
                </AnimatedCopy>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  We work with brands, publications and artists to tell stories
                  through sounds and words; producing creative and impactful
                  content and music for bespoke campaigns.
                </p>
              </div>
            </section>
            <section className="" id="work">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                03 / Connect
              </p>
              <AnimatedCopy mode="scroll">
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl font-de-fonte-plus mb-4">
                  RECENT WORK
                </h2>
              </AnimatedCopy>
              <p>Composition</p>
              <ul className="grid w-full gap-4 md:grid-cols-2 mt-5">
                <li>
                  <a
                    className="group relative block"
                    href="https://www.dropbox.com/scl/fi/3sx0ayvucjb45jk3t83ph/NB_PURE-AMBITIION_EZE-X-MAGNUS_DC_CUT08_C.mp4?rlkey=craheivzfodr6grr4sykob9b3&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/NB.jpg"
                      alt="New Balance logo"
                      width={1024}
                      height={960}
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      New Balance
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group relative block"
                    href="https://www.dropbox.com/scl/fi/8wl8czcmzkagu8cvhicw7/seven_tn_hero_v4_JR-MIX-050923.mov?rlkey=ld5234wmj2b59lqymwud47vnt&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/nike_seven.jpg"
                      alt="Nike logo"
                      width={1024}
                      height={960}
                      className="inline-block h-full w-auto transition-opacity duration-300 group-hover:opacity-50"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Nike / Seven Store
                    </span>
                  </a>
                </li>
              </ul>

              <p className="mt-10">Journalism</p>
              <ul className="grid w-full gap-4 md:grid-cols-2 mt-5">
                {JOURNALIST_ITEMS.map((item, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className="group relative block w-full cursor-zoom-in text-left"
                      onClick={() => setLightboxItem(item)}
                      aria-label={`View ${item.title} image fullscreen`}
                    >
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={1024}
                        height={960}
                        className="inline-block aspect-video h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.title}
                      </span>
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/oliveoil.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/oliveoil.jpg"
                      alt="Etihad Olive Oil"
                      width={1024}
                      height={960}
                      className="inline-block aspect-video h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxItem.title} image fullscreen`}
          onClick={() => setLightboxItem(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-4 z-10 text-4xl font-light text-white hover:cursor-pointer"
            onClick={() => setLightboxItem(null)}
            aria-label="Close image"
          >
            &times;
          </button>
          <Image
            src={lightboxItem.imgSrc}
            alt={lightboxItem.title}
            fill
            sizes="100vw"
            className="object-contain p-6"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
