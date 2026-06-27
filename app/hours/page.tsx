import { MdErrorOutline } from "react-icons/md"

import { createSupabaseClient } from "@/lib/supabase/client"
import EventCard from "@/components/EventCard"

const ROBS_PERSON_ID = 1

export default async function HoursPage() {
    const supabase = await createSupabaseClient()
    const { data, error } = await supabase
        .from("hours")
        .select("id, day, start, end, location, videoConferenceLink:videoconference_link, extraInfo:extra_info")
        .eq("person_id", ROBS_PERSON_ID)
        .eq("type", "office")

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <main className="flex flex-col items-center mx-2 my-12">
            <h1 className="mb-6 md:mb-4 text-3xl md:text-4xl font-medium">Rob&apos;s Office Hours</h1>
            <div className="flex justify-center flex-wrap flex-col w-full max-w-xl gap-2">
                {error && (
                    <div role="alert" className="alert">
                        <span className="text-2xl text-error"><MdErrorOutline /></span>
                        <span>An error occurred fetching Rob&apos;s office hours.  Please try again later.</span>
                    </div>
                )}
                {data && data.map(hours => <EventCard key={hours.id} {...hours} />)}
            </div>
        </main>
    )
}
