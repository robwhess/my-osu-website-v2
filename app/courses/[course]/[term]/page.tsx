import { createClient } from "@/lib/supabase/server"

export async function generateStaticParams() {
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select("id, courseTerm:course_term(id)")

    if (error) {
        console.error(error)
        throw error
    }

    return (data ?? []).flatMap(course =>
        (course.courseTerm ?? []).map((courseTerm: { id: string }) => ({
            course: course.id,
            term: courseTerm.id.split("-")[1]
        }))
    )
}

export default async function CourseTermPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = await params
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course_term")
        .select("*,lecture(*)")
        .match({ id: courseTermId })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <h2>{data?.course_id} - {data?.term} {data?.year}</h2>
    )
}
