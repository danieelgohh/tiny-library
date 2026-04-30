'use client'
import Form from 'next/form'
import { usePathname } from 'next/navigation'

export default function SearchBar({ query }: {query: string | undefined}) {
  const pathname = usePathname()
  return (
    <Form action={pathname} className='flex justify-center px-5 mt-5 mb-8'>
      <label htmlFor="books-query" className='sr-only'>Search book library</label>
      <input 
        className='border w-full rounded-3xl py-3 px-4.5'
        type="search" 
        id="books-query"
        name="query"
        key={pathname}
        placeholder="Search for a book"
        autoComplete='off'
        defaultValue={query}/>
    </Form>
  )
}