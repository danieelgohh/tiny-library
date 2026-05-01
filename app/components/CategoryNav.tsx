'use client'
import booksData from '@/app/data/books.json'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CategoryNav() {
  const pathname = usePathname()
  const categories = booksData.map(bd => bd.category)
  const finalCategories = [...new Set(categories)]
  return (
    <nav>
      <ul className='flex overflow-x-auto gap-5 hide-scrollbar ml-5'>
        <Link href='/books'>
          <li className={`text-nowrap hover:text-[#F77429] ${pathname === "/books" ? "text-[#F77429] decoration-[#F77429]" : ""}`}>
            ALL
          </li>
        </Link>
        {finalCategories.map(cat => (
          <Link href={`/books/${cat}`}>
            <li className={`text-nowrap hover:text-[#F77429] ${pathname === `/books/${cat}` ? "text-[#F77429] decoration-[#F77429]" : ""}`} key={cat}>
              {cat.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}