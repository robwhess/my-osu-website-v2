/*
 * From https://github.com/vercel/next.js/tree/canary/examples/with-supabase.
 *
 * Note that some of this stuff is not important for this project.  We'll never
 * be dealing with cookies on the server side because any server-side rendering
 * will only be done during a static site build, i.e. we're not running the
 * Next.js server in production.  I guess we need this for development, though?
 */

import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request })

    // With Fluid compute, don't put this client in a global environment
    // variable. Always create a new one on each request.
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    )
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                }
            }
        }
    )

    // Do not run code between createServerClient and
    // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    // IMPORTANT: If you remove getClaims() and you use server-side rendering
    // with the Supabase client, your users may be randomly logged out.
    const { data } = await supabase.auth.getClaims()
    const user = data?.claims
    console.debug("Supabase user:", user)

    // if (
    //     request.nextUrl.pathname !== "/" &&
    //     !user &&
    //     !request.nextUrl.pathname.startsWith("/login") &&
    //     !request.nextUrl.pathname.startsWith("/auth")
    // ) {
    //     // no user, potentially respond by redirecting the user to the login page
    //     const url = request.nextUrl.clone()
    //     url.pathname = "/auth/login"
    //     return NextResponse.redirect(url)
    // }

    // IMPORTANT: You *must* return the supabaseResponse object as it is.
    // If you're creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse
}
