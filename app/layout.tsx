import type { Metadata } from "next"
import { Nunito_Sans, Lato } from "next/font/google"
import "./globals.css"

import Image from "next/image"
import Link from "next/link"

import logo from "@/public/images/tinylibrary-logo.png"

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["700"]
})

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "A place to store your e-books",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <nav className="px-5 py-2.5">
            <ul className="flex justify-between items-center">
              <Link href="/">
                <Image className="w-20 h-12.5 object-cover" src={logo} alt="Tiny library logo" width={200} height={200}></Image>
              </Link>
              <div className="flex gap-10 font-semibold font-primary text-[#606060]">
                <li className="hover:text-[#F77429]"><Link href="/books">BOOKS</Link></li>
                <li className="hover:text-[#F77429]"><Link href="/about">ABOUT</Link></li>
              </div>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}