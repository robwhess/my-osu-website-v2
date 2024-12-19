import { useParams } from 'react-router'
// import { useQuery } from '@apollo/client'
// import {
//   Box,
//   Flex, Spacer,
//   Heading,
//   Text,
//   Select
// } from '@chakra-ui/react'

// import { COURSE_TERM_PAGE_COURSE } from '@/lib/apollo/queries'

import { getCourseTermId } from '@/lib/database/utils'

export default function CourseTerm() {
  const { course, termYear } = useParams()
  const currCourseTerm = getCourseTermId(course, termYear)
  return (
    <div>{currCourseTerm}</div>
  )
}
