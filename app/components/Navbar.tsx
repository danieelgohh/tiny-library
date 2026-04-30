'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import logo from "@/public/images/tinylibrary-logo.png"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="px-5 py-2.5">
      <ul className="flex justify-between items-center">
        <Link href="/">
          <Image className="w-20 h-12.5 object-cover" src={logo} alt="Tiny library logo" width={200} height={200}></Image>
        </Link>
        <div className="flex gap-10 font-semibold font-primary text-[#606060]">
          <Link href="/books"><li className={`${pathname === "/books" ? "text-[#F77429] underline decoration-[#F77429]" : ""} underline-offset-8 hover:text-[#F77429]`}>BOOKS</li></Link>
          <Link href="/about"><li className={`${pathname === "/about" ? "text-[#F77429] underline decoration-[#F77429]" : ""} underline-offset-8 hover:text-[#F77429]`}>ABOUT</li></Link>
        </div>
      </ul>
    </nav>
  )
}