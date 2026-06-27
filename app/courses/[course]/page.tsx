import { createSupabaseClient } from "@/lib/supabase/client"
import { notFound } from "next/navigation"

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

export default async function Course({
    params
}: {
    params: Promise<{ course: string }>
}) {
    const { course } = await params
    const supabase = await createSupabaseClient()
    const { data, error } = await supabase
        .from("course")
        .select()
        .eq("id", course)
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    if (!data) {
        notFound()
    }

    return <h1 className="mx-auto my-20">{data?.number || "Course"}</h1>
}
