"use client"

import { useState } from "react"
import Link from "next/link"
import { HiMenuAlt1 } from "react-icons/hi"
import { MdChevronRight } from "react-icons/md"

import { groupCoursesByTerm } from "@/lib/utils"
import { termNames } from "@/lib/supabase/strings"

import { Course, Term } from "@/lib/types"

export default function CourseListNav({
    courses
}: Readonly<{
    courses: Course[] | null
}>) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)
    const coursesByTerm = groupCoursesByTerm(courses ?? [])
    const courseMenuEntries = Object.entries(termNames).map(([ term, termName ]) => (
        <li key={term}>
            <h3 className="my-2 uppercase text-sm font-semibold text-gray-500">{termName}</h3>
            <ul>
                {coursesByTerm[term as Term].map(course => (
                    <li key={course.id} className="ml-2 px-3 py-1 border-l border-l-neutral-content font-semibold">
                        <Link href={`courses/${course.id}`}>{course.number}</Link>
                    </li>
                ))}
            </ul>
        </li>
    ))

    return (
        <div>
            <div className="md:hidden p-2 border-b border-b-neutral-content flex items-center gap-2 relative">
                <button
                    className="btn btn-ghost btn-square text-xl"
                    onClick={() => setMenuIsOpen(prev => !prev)}
                >
                    <HiMenuAlt1 />
                </button>
                <p>Course</p>
                <p className="text-xl"><MdChevronRight /></p>
                <p className="text-gray-400">None selected</p>
            </div>
            <nav className={`${menuIsOpen ? "" : "max-md:hidden"} md:min-h-full p-6 max-md:absolute max-md:w-full max-md:bg-base-200 max-md:shadow-xs md:border-r md:border-r-neutral-300`}>
                <ul>
                    {courseMenuEntries}
                </ul>
            </nav>
        </div>
    )
}
