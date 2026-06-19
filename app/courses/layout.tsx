import { createClient } from "@/lib/supabase/server"

import CourseListMenu from "@/components/CourseListNav"

export default async function CoursesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("course")
        .select()

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <div className="flex flex-col md:flex-row">
            <CourseListMenu courses={data} />
            {children}
        </div>
    )
}
