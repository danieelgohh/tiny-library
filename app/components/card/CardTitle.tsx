import type { ChildrenProp } from "@/app/types"
import type { JSX } from "react"

export default function CardTitle({ children } : ChildrenProp): JSX.Element {
  return (
    <h1 className="font-secondary text-2xl">{children}</h1>
  )
}