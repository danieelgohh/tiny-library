'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import logo from "@/public/images/tinylibrary-logo.png"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex w-full px-5 py-2.5 items-center lg:max-h-35.5 ">
      <ul className="flex justify-between items-center w-full">
        <Link href="/">
          <Image className="w-auto object-cover" src={logo} alt="Tiny library logo" width={200} height={200}></Image>
        </Link>
        <div className="flex gap-10 font-semibold font-primary text-[#606060]">
          <Link href="/books"><li className={`${pathname === "/books" ? "text-[#F77429] underline decoration-[#F77429]" : ""} underline-offset-8 hover:text-[#F77429]`}>BOOKS</li></Link>
          <Link href="/about"><li className={`${pathname.startsWith("/about") ? "text-[#F77429] underline decoration-[#F77429]" : ""} underline-offset-8 hover:text-[#F77429]`}>{pathname === "/about/contact" ? "ABOUT:CONTACT" : "CONTACT"}</li></Link>
        </div>
      </ul>
    </nav>
  )
}