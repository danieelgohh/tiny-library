import type { ChildrenProp } from "@/app/types"
import type { JSX } from "react"

export default function CardAuthor({ children } : ChildrenProp): JSX.Element {
  return (
    <h2 className="font-primary font-400 text-xl my-4.5">{children}</h2>
  )
}