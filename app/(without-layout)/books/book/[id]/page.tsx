import { fetchBookDetails } from "@/app/lib/books"

import BookDetails from "@/app/components/BookDetails"

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
    <BookDetails book={selectedBook}></BookDetails>
  )
}