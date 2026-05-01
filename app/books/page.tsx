import booksData from '@/app/data/books.json'

import Card from '@/app/components/card/Card'
import CardImage from '../components/card/CardImage'
import CardTitle from '../components/card/CardTitle'
import CardAuthor from '../components/card/CardAuthor'
import CardTags from '../components/card/CardTags'
import CardActions from '../components/card/CardActions'

import Link from 'next/link'

type BooksPageProps = {
  searchParams: Promise<{
    query?: string
  }>
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const query = (await searchParams)?.query?.toLowerCase() || ""
  const books = booksData.filter(b => b.category.includes(query) || b.name.toLowerCase().includes(query))
  return (
    <main className='flex flex-col gap-5'>
      {books.map(b => (
        <Link href={`/books/book/${b.id}`}>
          <Card key={b.id}>
            <CardImage src={b.image} bookTitle={b.name}></CardImage>
            <div className='p-4'>
              <CardTitle>{b.name}</CardTitle>
              <CardAuthor>{b.author}</CardAuthor>
              <CardTags>{b.category}</CardTags>
              <CardActions>{b.likes}</CardActions>
            </div>
          </Card>
        </Link>
      ))}
    </main>
  )
}