import { notFound } from "next/navigation"

import { createSupabaseClient } from "@/lib/supabase/client"
import CourseTermSelectForm from "@/components/CourseTermSelectForm"

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

    return (
        <div className="p-4 flex flex-col items-stretch gap-2">
            <div className="flex flex-col md:flex-row md:justify-between items-stretch md:items-center gap-4">
                <div className="md:flex-2">
                    <h1 className="text-2xl font-semibold">{courseData.number} &ndash; {courseData.title}</h1>
                    <h2 className="text-sm">{courseData.description}</h2>
                </div>
                {
                    /*
                     * If at least one course term exists for this course, then
                     * render a menu the user can use to select the course term
                     * they want to view.
                     */
                    courseData.courseTerm.length > 0 && (
                        <div className="md:flex-1">
                            <CourseTermSelectForm courseTerms={courseData.courseTerm} />
                        </div>
                    )
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
