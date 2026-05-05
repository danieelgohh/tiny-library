import Image from "next/image"

import type { Book } from "../types"

import { Heart } from 'lucide-react'

type BookDetailsProps = {
  book: Book
  searchParams?: Promise<{
    query?: string
  }>
}

export default async function BookDetails({ book, searchParams }: BookDetailsProps) {
  const {image, name, likes, category, author, dateAdded} = book
  return (
    <>
      <a href=""></a>
      <div className="lg:grid lg:w-screen lg:grid-cols-3 lg:items-center lg:gap-10 lg:justify-center">
        <Image 
          className="px-4 mb-5 lg:w-full lg:col-span-2"
          src={image}
          alt={`Book cover for the book titled ${name}`}
          width={362}
          height={362}
        >
        </Image>
        <div className='p-4 lg:w-full'>
          <button className="flex items-center gap-1.5 mb-1.5 text-2xl text-[#606060] font-primary font-regular">
            <Heart size={32} color="#A1A1A1" strokeWidth={1.5} />
            {likes}
          </button>
          <h1 className="font-secondary text-2xl">{name}</h1>
          <div className="border border-[#A1A1A1] my-4.5 p-2.5 inline-block rounded-full font-primary font-400 text-base text-[#1E1E1E]">
            {category}
          </div>
          <h2 className="font-primary font-400 text-xl">{author}</h2>
          <p className="mt-43.75 lg:mt-10">Added on {(dateAdded.split("T")[0]).split(`-`).join(`/`)}</p>
        </div>
      </div>
    </>
  )
}