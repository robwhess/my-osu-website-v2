import type { Metadata } from "next"
import { Raleway, Cascadia_Code } from "next/font/google"

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

const cascadiaCode = Cascadia_Code({
  variable: "--font-cascadia-code",
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
            className={`${raleway.variable} ${cascadiaCode.variable} h-full antialiased`}
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
