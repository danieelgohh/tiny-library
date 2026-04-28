import type { ChildrenProp } from "@/app/types"
import type { JSX } from "react"
import { Heart } from 'lucide-react'

export default function CardActions({ children }: ChildrenProp): JSX.Element {
  return (
    <div className="flex">
      <button className="flex items-center gap-1.5">
        <Heart size={20} color="#A1A1A1" strokeWidth={1.5} />
        {children}
      </button>
    </div>
  )
}