import { fetchCategory } from "@/app/lib/books"

import Card from '@/app/components/card/Card'
import CardImage from '@/app/components/card/CardImage'
import CardTitle from '@/app/components/card/CardTitle'
import CardAuthor from '@/app/components/card/CardAuthor'
import CardTags from '@/app/components/card/CardTags'
import CardActions from '@/app/components/card/CardActions'

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
    <main>
      {filteredBooks.map(b => (
        <Card key={b.id}>
          <CardImage src={b.image} bookTitle={b.name}></CardImage>
          <div className='p-4'>
            <CardTitle>{b.name}</CardTitle>
            <CardAuthor>{b.author}</CardAuthor>
            <CardTags>{b.category}</CardTags>
            <CardActions>{b.likes}</CardActions>
          </div>
        </Card>
      ))}
    </main>
  )
}