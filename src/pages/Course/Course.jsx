import { useParams, Navigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { COURSE_PAGE_COURSE } from '@/lib/apollo/queries'

import { getTermYearCode } from '@/lib/database/utils'

export default function Course() {
    const { course } = useParams()
    const { data } = useQuery(COURSE_PAGE_COURSE, {
      fetchPolicy: 'cache-only',
      variables: { id: course }
    })
    const courseData = data?.courseCollection?.edges[0]?.node
    const courseTerms = courseData?.courseTermCollection?.edges
    const currentTerm = courseTerms[0]?.node
    if (currentTerm) {
      return <Navigate to={`${getTermYearCode(currentTerm.term, currentTerm.year)}`} />
    } else {
      return <div>TODO: handle case where there isn't a current term!</div>
    }
}
