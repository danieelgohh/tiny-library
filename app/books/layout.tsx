import booksData from '@/app/data/books.json'

export default function BooksLayout({ children } : Readonly<{
  children: React.ReactNode
}>) {
  const categories = booksData.map(bd => bd.category)
  const finalCategories = [...new Set(["all", ...categories])]
  return (
    <>
      <header>
        <nav>
          <ul className='flex overflow-x-auto gap-5 hide-scrollbar ml-5'>
            {finalCategories.map(cat => <li className="text-nowrap cursor-pointer hover:text-[#F77429]" key={cat }>{cat.toUpperCase()}</li>)}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}