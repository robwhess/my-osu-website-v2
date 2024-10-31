import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { COURSE_PAGE_COURSE } from '@/lib/apollo/queries'

export default function Course() {
    const { course } = useParams()
    const { data: courseData, loading, error } = useQuery(COURSE_PAGE_COURSE, {
      fetchPolicy: 'cache-only',
      variables: { id: course }
    })
    console.log("== courseData:", courseData)
    return (
      <>
        <h2>Course: {course} </h2>
      </>
    )
  }
