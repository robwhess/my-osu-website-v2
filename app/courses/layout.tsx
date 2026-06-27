import { createSupabaseClient } from "@/lib/supabase/client"

import CourseListNav from "@/components/CourseListNav"

export default async function CoursesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createSupabaseClient()
    const { data, error } = await supabase
        .from("course")
        .select()
        .order("number", { ascending: true })

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <div className="min-h-dvh flex flex-col md:flex-row items-stretch">
            <div>
                <CourseListNav courses={data} />
            </div>
            <div className="grow">
                {children}
            </div>
        </div>
    )
}
