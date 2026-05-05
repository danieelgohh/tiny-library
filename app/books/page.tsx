import booksData from '@/app/data/books.json'

import BooksList from '../components/BooksList'

type BooksPageProps = {
  searchParams: Promise<{
    query?: string
  }>
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const query = (await searchParams)?.query?.toLowerCase() || ""
  const books = booksData.filter(b => b.category.includes(query) || b.name.toLowerCase().includes(query))
  return (
    <BooksList books={books}></BooksList>
  )
}