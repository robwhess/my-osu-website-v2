import Link from "next/link"
import Image from "next/image"

import logo from "@/app/_static/rh-logo-transparent.png"

export default function Header() {
    return (
        <div className="flex items-center justify-between gap-4">
            <header className="mx-2 my-4 flex items-center justify-end gap-3">
                <Link href="/" className="shrink-0">
                    <Image className="size-18 sm:size-20" src={logo} alt="RH Logo" />
                </Link>
                <Link
                    href="/"
                    className="flex flex-col items-start text-inherit no-underline hover:no-underline"
                >
                    <h1 className="text-4xl font-extralight leading-none">Rob Hess</h1>
                    <h2 className="text-sm font-extralight leading-tight sm:text-base">Oregon State University</h2>
                </Link>
            </header>
        </div>
    )
}
