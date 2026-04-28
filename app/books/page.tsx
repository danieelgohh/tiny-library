import booksData from '@/app/data/books.json'

import Card from '@/app/components/card/Card'
import CardImage from '../components/card/CardImage'
import CardTitle from '../components/card/CardTitle'
import CardAuthor from '../components/card/CardAuthor'
import CardTags from '../components/card/CardTags'
import CardActions from '../components/card/CardActions'

export default function BooksPage() {
  const books = booksData
  return (
    <div>
      {books.map(b => (
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
    </div>
  )
}