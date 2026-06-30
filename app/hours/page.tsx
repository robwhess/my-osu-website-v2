"use client"

import { useQuery } from "@supabase-cache-helpers/postgrest-swr"

import EventCard from "@/components/EventCard"
import { createClient } from "@/lib/supabase/client"

const ROBS_PERSON_ID = 1

export default function HoursPage() {
    const supabase = createClient()
    const { data, isLoading } = useQuery(
        supabase
            .from("hours")
            .select("id,day,start,end,location,videoConferenceLink:videoconference_link,extraInfo:extra_info")
            .match({ person_id: ROBS_PERSON_ID, type: "office" })
    )

    console.log("== isLoading:", isLoading)

    return (
        <main className="flex flex-col items-center mx-2 my-12">
            <h1 className="mb-6 md:mb-4 text-3xl md:text-4xl font-medium">Rob&apos;s Office Hours</h1>
            <div className="flex justify-center flex-wrap flex-col w-full max-w-xl gap-2">
                {data && data.map(hours => <EventCard key={hours.id} {...hours} />)}
            </div>
        </main>
    )
}
