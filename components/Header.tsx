import Link from "next/link"
import Image from "next/image"

// import logo from "@/static/rh-logo.png"
import logoTransparent from "@/static/rh-logo-transparent.png"

export default function Header() {
    return (
        <header className="mt-4 mx-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Link href="/" className="shrink-0">
                    <Image
                        src={logoTransparent}
                        alt="RH Logo"
                        loading="eager"
                        className="size-18 sm:size-20"
                    />
                    {/* <Image
                        src={logo}
                        alt="RH Logo"
                        loading="eager"
                        className="size-18 sm:size-20 hidden dark:block"
                    /> */}
                </Link>
                <Link
                    href="/"
                    className="flex flex-col items-start text-inherit"
                >
                    <h1 className="text-5xl">Rob Hess</h1>
                    <h2 className="ml-1 leading-tight">Oregon State University</h2>
                </Link>
            </div>
        </header>
    )
}
