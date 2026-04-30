import CategoryNav from "../components/CategoryNav"
import SearchBar from "../components/SearchBar"

type BooksLayoutProps = {
  children: React.ReactNode
  searchParams: Promise<{
    query?: string
  }>
}

export default async function BooksLayout({ children, searchParams } : BooksLayoutProps) {
  const query = (await searchParams)?.query
  return (
    <>
      <header>
        <CategoryNav />
        <SearchBar query={query} />
      </header>
      <main>{children}</main>
    </>
  )
}