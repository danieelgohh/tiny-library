export type ChildrenProp = Readonly<{
  children: React.ReactNode
}>

export type Book = {
  id: number
  name: string
  author: string
  likes: number
  image: string
  category: string
  dateAdded: string
}