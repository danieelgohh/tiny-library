import type {ChildrenProp} from '@/app/types'
import type { JSX } from 'react'


export default function Card({children} : ChildrenProp): JSX.Element {
  return (
    <div className='rounded-[10px] border border-[#A1A1A1] hover:shadow-xl max-w-90'>
      {children}
    </div>
  )
}