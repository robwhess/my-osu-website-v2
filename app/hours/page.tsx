import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/server"
import EventCard from "@/components/EventCard"

const ROBS_PERSON_ID = 1

export default async function Hours() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("hours")
        .select("id, day, start, end, location, videoConferenceLink:videoconference_link, extraInfo:extra_info")
        .eq("person_id", ROBS_PERSON_ID)
        .eq("type", "office")

    if (error) {
        console.error(error)
    }

    return (
        <main className="flex flex-col items-center mx-2 my-12">
            <h1 className="mb-8 text-3xl lg:text-4xl font-medium">Rob&apos;s Office Hours</h1>
            <div className="flex justify-center flex-wrap flex-col lg:flex-row w-full max-w-xl gap-2">
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
