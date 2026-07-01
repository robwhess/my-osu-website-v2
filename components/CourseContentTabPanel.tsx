"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CourseContentTabList({
    tabs,
    children
}: Readonly<{
    tabs: Array<{ title: string, href: string, icon: React.ReactNode }>,
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const activeTabStyles = "menu-active bg-none bg-base-100 text-base-content border max-md:border-r-0 md:border-b-0 border-base-300"

    return (
        <div className="flex md:flex-col items-stretch">
            <ul role="tablist" className="menu max-md:menu-xs md:menu-horizontal p-0 max-md:-mr-px md:-mb-px">
                {tabs.map(tab => (
                    <li
                        key={tab.href}
                        role="tab"
                        className={`${pathname === tab.href ? activeTabStyles : ""}`}
                    >
                        <Link href={tab.href} className="flex flex-col gap-1">
                            <p className="text-lg">{tab.icon}</p>
                            <p>{tab.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div role="tabpanel" className="p-4 bg-base-100 border border-base-300 grow">
                {children}
            </div>
        </div>

    )
}
