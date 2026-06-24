/*
 * A card component for displaying information about an event.  Input
 * props are strings, and a few of them are flexible, e.g. `day` could be a
 * day of the week like "Wednesday", or it could be a specific date like
 * "June 10, 2026".
 */

import dayjs from "dayjs"
import CustomParseFormat from "dayjs/plugin/customParseFormat"
import { MdAccessTime, MdOutlineInfo, MdOutlineLocationOn, MdVideocam } from "react-icons/md"

dayjs.extend(CustomParseFormat)

export default function EventCard({
  day,
  start,
  end,
  location,
  videoConferenceLink,
  extraInfo
} : {
    day: string,
    start: string,
    end: string | null,
    location: string | null,
    videoConferenceLink: string | null,
    extraInfo: string | null
}) {
    const startTime = dayjs(start, "HH:mm:ss").format("h:mm a")
    const endTime = end && dayjs(end, "HH:mm:ss").format("h:mm a")

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body gap-1">
                <h3 className="card-title text-xl md:text-2xl font-bold">
                    {day}
                </h3>
                <div className="flex items-center gap-2 text-lg md:text-xl">
                    <p className="grow-0"><MdAccessTime /></p>
                    <p>{startTime}{endTime && <> &ndash; {endTime}</>}</p>
                </div>
                <div className="flex items-center gap-4">
                    {location && (
                        <div className="flex items-center gap-2 text-lg md:text-xl">
                            <p className="grow-0"><MdOutlineLocationOn /></p>
                            <p>{location}</p>
                        </div>
                    )}
                    {videoConferenceLink && (
                        <a
                            href={videoConferenceLink}
                            className="btn btn-outline btn-sm"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <span className="text-base"><MdVideocam /></span> Join
                        </a>
                    )}
                </div>
                {extraInfo && (
                    <div className="flex items-center gap-2 text-gray-400">
                        <p className="grow-0 ml-0.5"><MdOutlineInfo /></p>
                        <p>{extraInfo}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
