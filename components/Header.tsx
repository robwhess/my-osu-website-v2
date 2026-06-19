"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LiaBarsSolid } from "react-icons/lia"

import logoTransparent from "@/static/rh-logo-transparent.png"

const navLinks = [
    {
        href: "/hours",
        title: "Office Hours"
    },
    {
        href: "/courses",
        title: "Courses"
    }
]

export default function Header() {
    const checkboxRef = useRef<HTMLInputElement>(null)
    const pathname = usePathname()
    return (
        <div className="drawer drawer-end">
            <input type="checkbox" id="nav-drawer-toggle" className="drawer-toggle" ref={checkboxRef} />
            <div className="drawer-content">
                <header className="py-4 px-2 border-b border-b-neutral-content flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="shrink-0">
                            <Image
                                src={logoTransparent}
                                alt="RH Logo"
                                loading="eager"
                                className="size-18 sm:size-20"
                            />
                        </Link>
                        <Link
                            href="/"
                            className="flex flex-col items-start text-inherit"
                        >
                            <h1 className="text-4xl md:text-5xl">Rob Hess</h1>
                            <h2 className="ml-1 leading-tight">Oregon State University</h2>
                        </Link>
                    </div>
                    <label
                        htmlFor="nav-drawer-toggle"
                        aria-label="Open navigation drawer"
                        className="md:hidden btn btn-ghost btn-square btn-xl text-5xl"
                    >
                        <LiaBarsSolid />
                    </label>
                    <nav className="hidden md:block text-xl font-medium">
                        <ul className="menu menu-xl menu-horizontal">
                            {navLinks.map(link => (
                                <li key={link.href} className={`${pathname === link.href ? "border-l-2 md:border-l-0 md:border-b-2" : ""}`}>
                                    <Link href={link.href} className="rounded-none">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
            <nav className="drawer-side">
                <label htmlFor="nav-drawer-toggle" aria-label="Close navigation drawer" className="drawer-overlay"></label>
                <ul className="menu menu-lg min-h-full w-80 p-4 bg-base-100">
                    {navLinks.map(link => (
                        <li key={link.href} className={`${pathname === link.href ? "border-l-2 md:border-l-0 md:border-b-2" : ""}`}>
                            <Link
                                href={link.href}
                                className="rounded-none"
                                onNavigate={() => checkboxRef.current!.checked = false}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
