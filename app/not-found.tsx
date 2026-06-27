import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex flex-col items-center gap-4">
            <h2 className="mt-24 text-3xl text-center">The page you requested was not found.</h2>
            <p><Link className="link text-sm" href="/">Return to the home page</Link></p>
        </main>
    )
}
