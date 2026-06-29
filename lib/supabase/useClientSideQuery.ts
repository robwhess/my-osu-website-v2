import { useEffect, useState } from "react"
import { QueryError } from "@supabase/supabase-js"

import { SupabaseQueryFn } from "@/lib/types"
import { createClient } from "./client"

/**
 * This is a hook that can be used to execute a Supabase query on the client
 * side.
 *
 * @param queryFn A function that executes the desired supabase query, given
 *   an instance of the Supabase client.  This function should always be
 *   wrapped with useCallback() to avoid excess component re-rendering
 *   (and accompanying excess network calls!).  See this StackOverflow post:
 *   https://stackoverflow.com/a/67802751.
 *
 * @returns Returns an object with 3 fields: { data, error, loading }.  The
 *   fields are:
 *     data - The results of the query, if successful.
 *     error - An error object, if one occurred.
 *     loading - A boolean value indicating whether the query is loading.
 */
export default function useClientSideQuery<T>(
    queryFn: SupabaseQueryFn<T>
) {
    const [ data, setData ] = useState<T | null>(null)
    const [ error, setError ] = useState<QueryError | null>(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        async function executeQuery() {
            const supabase = await createClient()
            setLoading(true)
            const { data:queryData, error:queryError } = await queryFn(supabase)
            setLoading(false)
            setData(queryData)
            setError(queryError)
        }
        executeQuery()
    }, [ queryFn ])

    return { data, error, loading }
}
