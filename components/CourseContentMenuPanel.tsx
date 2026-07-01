"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"

export default function CourseContentMenuPanel({
    sections,
    children
}: Readonly<{
    sections: Array<{ title: string, href: string, icon: React.ReactNode }>,
    children: React.ReactNode
}>) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)
    const pathname = usePathname()

    return (
        <div className="flex flex-col items-stretch">
            <div className="min-h-full relative">
                <div className="flex items-center gap-2 bg-base-100 border border-b-0 border-base-300">
                    <button
                        className="btn btn-ghost btn-square"
                        onClick={() => setMenuIsOpen(prev => !prev)}
                        aria-label="Open/close the course content selection menu"
                    >
                        <HiMenuAlt1 />
                    </button>
                    <p className="text-sm">Basics</p>
                </div>
                <nav className={`${menuIsOpen ? "" : "hidden"} absolute px-2 pb-4 w-full z-10 bg-base-100 border border-t-0 border-base-300 shadow-xs`}>
                    <ul>
                        {sections.map(s => (
                        <li
                            key={s.href}
                            className={`ml-2 px-3 py-1 border-l text-sm relative ${s.href === pathname ? "border-l-2 border-primary" : "border-base-300 left-px"}`}
                        >
                            <Link
                                href={s.href}
                                onNavigate={() => setMenuIsOpen(false)}
                            >
                                {s.title}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <div className="p-2 bg-base-100 border border-t-0 border-base-300 grow">
                {children}
            </div>
        </div>
    )
}
