import books from '@/app/data/books.json'

import type { Book } from '../types'

export function fetchCategory(category?: string): Book[] {
  const filteredBooks = category ? books.filter(b => b.category === category) : books
  return filteredBooks
} 

export function fetchBookDetails(id: number | string): Book | undefined {
  const selectedBook = books.find(b => b.id.toString() === id.toString())
  return selectedBook
}