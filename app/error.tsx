"use client"

import { useEffect } from "react"
import { MdErrorOutline } from "react-icons/md"

export default function Error({
    error
}: {
    error: Error & { digest?: string }
}) {
    useEffect(() => {
        console.error(error)
    }, [ error ])

    return (
        <div role="alert" className="alert">
            <span className="text-2xl text-error"><MdErrorOutline /></span>
            <span>Sorry!  An error occurred.  Please try again later.</span>
        </div>
    )
}
