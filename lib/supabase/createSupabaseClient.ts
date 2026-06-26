import { createClient } from "@supabase/supabase-js"

import { Database } from "@/generated/supabase/types"

export function createSupabaseClient() {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
}
