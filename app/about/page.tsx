import Image from "next/image"
import Link from "next/link"

import heroImageSquare from "@/public/images/hero-image-square.png"

import { Layers, Globe, Flag } from "lucide-react"

export default function functionName() {
  return (
    <main>
      <section className="flex flex-col items-start font-primary color-[#1E1E1E] border-b-1 border-b-[#DDDDDD] px-5 mb-10">
        <Image 
          src={heroImageSquare}
          alt="Background image of a beach shore"
          width={627}
          height={627}
        >
        </Image>
        <p className="my-5 font-medium text-sm">ABOUT TINY LIBRARY</p>
        <h1 className="font-secondary text-[2.5em] leading-none">Small shelf, big impact</h1>
        <p className="my-5 font-normal text-2xl">Tiny Library started as a simple idea: make it easier for curious readers to actually find books they'll love, not just scroll endless lists. Every title here is chosen with care, not algorithms.</p>
        <Link className="mb-10 border border-2 px-7.5 py-3 self-center" href='/about/contact'>CONTACT US</Link>
      </section>

      <section className="flex flex-col gap-3 items-start font-primary px-5 border-b-1 border-b-[#DDDDDD] mb-10">
        <article>
          <div className="flex gap-1.5 items-center">
            <Layers size={32} color="#000" />
            <h2 className="font-secondary text-[1.75em]">Curated, not crowded</h2>
          </div>
          <p className="font-normal text-xl">Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.</p>
        </article>
        <article>
          <div className="flex gap-1.5 items-center">
            <Globe size={32} color="#000" />
            <h2 className="font-secondary text-[1.75em]">Easy to browse</h2>
          </div>
          <p className="font-normal text-xl">Clear categories and simple descriptions make it quick to choose what you actually want to read next.</p>
        </article>
        <article className="mb-10">
          <div className="flex gap-1.5 items-center">
            <Flag size={32} color="#000" />
            <h2 className="font-secondary text-[1.75em]">Readers first</h2>
          </div>
          <p className="font-normal text-xl">Every part of Tiny Library is designed to help you spend less time searching and more time reading.</p>
        </article>
      </section>

      <section className="flex flex-col font-primary px-5 text-[#1E1E1E]">
        <h2 className="font-secondary text-[2.5em] mb-5">Our ethos</h2>
        <p className="font-regular">At Tiny Library, we believe a good book shouldn't be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers can trust that anything they pick up is worth their time.</p>
        <hr className="self-center w-60 my-10 border-[#4E4E4E]"/>
        <p className="font-regular">Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they've stepped into a cosy, well-loved library where someone has already done the hard work of sorting through the noise.</p>
      </section>
    </main>
  )
}