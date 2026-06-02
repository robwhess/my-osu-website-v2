import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
