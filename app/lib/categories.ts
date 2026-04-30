import books from '@/app/data/books.json'

type Book = {
  id: number
  name: string
  author: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export function fetchCategory(category?: string): Book[] {
  const filteredBooks = category ? books.filter(b => b.category === category) : books
  return filteredBooks
} 