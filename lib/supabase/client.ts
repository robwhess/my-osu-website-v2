/*
 * From https://github.com/vercel/next.js/tree/canary/examples/with-supabase
 */

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
}
