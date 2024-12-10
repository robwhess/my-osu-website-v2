/*
 * React Router data loader for course/term info.
 *
 * The purpose of this loader is to pre-fetch the course data and cache it in
 * Apollo's cache.  Apollo's useQuery() hook still should be used in the
 * relevant component, just with the 'cache-only' value for the `fetchPolicy`
 * option to ensure that a second network request isn't made.  See this  post
 * for more info:
 *
 * https://community.apollographql.com/t/how-to-load-data-with-react-router-dom-v6-and-handling-errorpage/5347/3
 */

import { client } from '@/lib/apollo'
import { COURSE_TERM_PAGE_COURSE } from '@/lib/apollo/queries'

export default async function coursePageLoader({ params }) {
  return client.query({
    query: COURSE_TERM_PAGE_COURSE,
    variables: { courseId: params.course, termId: params.term }
  })
}
