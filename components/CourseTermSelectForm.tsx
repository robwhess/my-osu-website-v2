"use client"

import { GoArrowRight } from "react-icons/go"

import { termNames } from "@/lib/supabase/strings"
import { CourseTerm } from "@/lib/types"

export default function CourseTermSelectForm({
    courseTerms
}: Readonly<{
    courseTerms: CourseTerm[]
}>) {
    return (
        <form
            className="flex gap-1"
            onSubmit={e => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const { courseTerm } = Object.fromEntries(formData)
                console.log("== courseTerm:", courseTerm)
            }}
        >
            <select
                name="courseTerm"
                defaultValue={courseTerms[0].id}
                className="select border-base-300"
                aria-label="Select the term and year you'd like to view for this course."
            >
                {courseTerms.map(courseTerm => (
                    <option key={courseTerm.id} value={courseTerm.id}>
                        {/*
                          * The cast here is needed because termNames doesn't contain "archive",
                          * and it's technically possible for courseTerm.term to be "archive",
                          * though that won't happen in practice.
                          */}
                        {termNames[courseTerm.term as keyof typeof termNames]} {courseTerm.year}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="btn btn-outline btn-square bg-base-100 border-base-300"
                aria-label="Navigate to the selected term and year for this course"
            >
                <GoArrowRight />
            </button>
        </form>
    )
}
