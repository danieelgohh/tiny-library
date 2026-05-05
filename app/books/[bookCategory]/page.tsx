import { fetchCategory } from "@/app/lib/books"

import BooksList from "@/app/components/BooksList"

type CategoryPageProps = {
  params: Promise<{
    bookCategory: string
  }>
  searchParams: Promise<{
    query?: string
  }>
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const query = (await searchParams)?.query?.toLowerCase() || ""
  const { bookCategory } = await params
  const filteredBooks = fetchCategory(bookCategory).filter(b => b.category.includes(query) || b.name.toLowerCase().includes(query))

  return (
    <BooksList title={bookCategory} books={filteredBooks}></BooksList>
  )
}