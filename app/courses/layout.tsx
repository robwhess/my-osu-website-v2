import { createClient } from "@/lib/supabase/server"

export default async function CoursesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("course")
        .select("id, number, title, terms")

    if (error) {
        console.error(error)
        throw error
    }

    console.log(data)

    return (
        <div className="flex flex-col md:flex-row">
            {children}
        </div>
    )
}
