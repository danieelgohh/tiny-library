import type { ChildrenProp } from "@/app/types"
import type { JSX } from "react"

export default function CardTags({ children }: ChildrenProp): JSX.Element {
  return (
    <div className="border p-2.5 inline-block rounded-[20px] font-primary font-400 text-base text-[#1E1E1E] mb-4.5">
      {children}
    </div>
  )
}