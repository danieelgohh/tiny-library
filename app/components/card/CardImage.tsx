import Image, { StaticImageData } from 'next/image'
import type { JSX } from 'react'

export type CardImageProps = {
  src: string | StaticImageData
  alt?: string
  width?: number
  height?: number
  bookTitle: string
}

export default function CardImage({ src, alt, width, height, bookTitle }: CardImageProps): JSX.Element {
  return (
    <Image 
      className='rounded-t-[10px]'
      src={src}
      alt={alt ? alt : `Book cover for the book titled ${bookTitle}`}
      width={width ? width : 362}
      height={height ? width : 362}
    >
    </Image>
  )
}