import type { Metadata } from "next"
import { Nunito_Sans, Lato } from "next/font/google"
import "./globals.css"

import Navbar from "./components/Navbar"

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
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}