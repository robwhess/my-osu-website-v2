/*
 * From https://github.com/vercel/next.js/tree/canary/examples/with-supabase.
 *
 * Note that some of this stuff is not important for this project.  We'll never
 * be dealing with cookies on the server side because any server-side rendering
 * will only be done during a static site build, i.e. we're not running the
 * Next.js server in production.  I guess we need this for development, though?
 */

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/*
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options),
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have proxy refreshing
                        // user sessions.
                    }
                }
            }
        }
    )
}
