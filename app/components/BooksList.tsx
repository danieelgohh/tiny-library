import bookCover from "@/public/images/hero-image-square.png"

import Link from 'next/link'

import Card from '@/app/components/card/Card'
import CardImage from './card/CardImage'
import CardTitle from './card/CardTitle'
import CardAuthor from './card/CardAuthor'
import CardTags from './card/CardTags'
import CardActions from './card/CardActions'

import type { Book } from "../types"

type BooksListProps = {
  title?: string
  books: Book[]
}

export default function BookList({ title = "all", books }: BooksListProps) {
  return (
    <main className='flex flex-col gap-5 items-center lg:items-start lg:pl-65 lg:mt-15 lg:pb-5'>
      <h1 className="font-secondary text-[2rem] mt-15 self-start sr-only lg:not-sr-only">{title.split('')[0].toUpperCase() + title.slice(1)}</h1>
      <div className="w-full lg:grid lg:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
        {books.map(b => (
          <Link key={b.id} href={`/books/book/${b.id}`}>
            <Card>
              <CardImage src={bookCover} bookTitle={b.name}></CardImage>
              <div className='p-4'>
                <CardTitle>{b.name}</CardTitle>
                <CardAuthor>{b.author}</CardAuthor>
                <CardTags>{b.category}</CardTags>
                <CardActions>{b.likes}</CardActions>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}