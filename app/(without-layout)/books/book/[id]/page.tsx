import Image from "next/image"

import { fetchBookDetails } from "@/app/lib/books"

import { Heart } from 'lucide-react'

type DetailedBookProps = {
  params: Promise<{
    id: number
  }>
}

export default async function DetailedBookPage({ params }: DetailedBookProps) {
  const { id } = await params
  const selectedBook = fetchBookDetails(id)

  if (!selectedBook) {
    return (<p>Book not found!</p>)
  }
  return (
    <div>
      <div className='p-4'>
        <Image 
          className="mb-5"
          src={selectedBook.image}
          alt={`Book cover for the book titled ${selectedBook.name}`}
          width={362}
          height={362}
        >
        </Image>
        <button className="flex items-center gap-1.5 mb-1.5 text-2xl text-[#606060] font-primary font-regular">
          <Heart size={32} color="#A1A1A1" strokeWidth={1.5} />
          {selectedBook.likes}
        </button>
        <h1 className="font-secondary text-2xl">{selectedBook.name}</h1>
        <div className="border border-[#A1A1A1] my-4.5 p-2.5 inline-block rounded-full font-primary font-400 text-base text-[#1E1E1E]">
          {selectedBook.category}
        </div>
        <h2 className="font-primary font-400 text-xl">{selectedBook.author}</h2>
      </div>
      <p className="p-4 mt-43.75">Added on {(selectedBook.dateAdded.split("T")[0]).split(`-`).join(`/`)}</p>
    </div>
  )
}