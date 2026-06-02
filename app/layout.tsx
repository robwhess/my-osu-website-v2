import type { Metadata } from "next"
import { Raleway, Inconsolata } from "next/font/google"

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
})

const inconsolataMono = Inconsolata({
  variable: "--font-inconsolata-mono",
  subsets: ["latin"],
})

import Header from "@/app/_components/Header"

import "./globals.css"

export const metadata: Metadata = {
    title: "Rob Hess - Oregon State University"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${ralewaySans.variable} ${inconsolataMono.variable} h-full antialiased`}
        >
            <body className="min-h-full">
                <div className="w-full max-w-7xl mx-auto">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
