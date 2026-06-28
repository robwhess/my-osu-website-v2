import { notFound } from "next/navigation"

import { createSupabaseClient } from "@/lib/supabase/client"
import { termNames } from "@/lib/supabase/strings"

export async function generateStaticParams() {
    const supabase = await createSupabaseClient()
    const { data, error } = await supabase
        .from("course")
        .select("id")
        .order("number", { ascending: true })

    if (error) {
        console.error(error)
        throw error
    }

    return data.map(c => ({ course: c.id }))
}

export default async function CourseLayout({
    params,
    children
}: Readonly<{
    params: Promise<{ course: string }>,
    children: React.ReactNode
}>) {
    const { course } = await params
    const supabase = await createSupabaseClient()
    const { data: courseData, error } = await supabase
        .from("course")
        .select("*, courseTerm:course_term(*)")
        .eq("id", course)
        .order("year", { referencedTable: "course_term", ascending: false })
        .order("term", { referencedTable: "course_term", ascending: true })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    if (!courseData) {
        notFound()
    }

    const lastCourseTerm = courseData.courseTerm[0]
    const courseTermSelect = lastCourseTerm && (
        <select className="select">
            {courseData.courseTerm.map(courseTerm => (
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
    )

    return (
        <div className="p-4 flex flex-col items-stretch gap-2">
            <div className="flex flex-col md:flex-row md:justify-between items-stretch md:items-center gap-4">
                <div className="md:flex-2">
                    <h1 className="text-2xl font-semibold">{courseData.number} &ndash; {courseData.title}</h1>
                    <h2 className="text-sm">{courseData.description}</h2>
                </div>
                {courseTermSelect && <div className="md:flex-1">{courseTermSelect}</div>}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
