/*
 * React Router data loader for course data.
 *
 * The purpose of this loader is to pre-fetch the office hours data and cache
 * it in Apollo's cache.  Apollo's useQuery() hook still should be used in the
 * relevant component, just with the 'cache-only' value for the `fetchPolicy`
 * option to ensure that a second network request isn't made.  See this post
 * for more info:
 *
 * https://community.apollographql.com/t/how-to-load-data-with-react-router-dom-v6-and-handling-errorpage/5347/3
 */

import { client } from '@/lib/apollo'
import { NAV_COURSES } from '@/lib/apollo/queries'

export default async function navCoursesLoader() {
  return client.query({ query: NAV_COURSES })
}
