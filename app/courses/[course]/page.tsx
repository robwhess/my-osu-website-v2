import { createClient } from "@/lib/supabase/server"

export default async function Course({
    params
}: {
    params: Promise<{ course: string}>
}) {
    const { course } = await params
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("course")
        .select()
        .eq("id", course)
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    return <h1 className="mx-auto my-20">{data?.number || "Course"}</h1>
}
