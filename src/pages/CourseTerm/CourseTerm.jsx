import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import {
  Box,
  Heading,
  Text,
  Select
} from '@chakra-ui/react'

import { COURSE_TERM_PAGE_COURSE } from '@/lib/apollo/queries'

import { terms } from '@/lib/database/strings'
import { getCourseTermId } from '@/lib/database/utils'

export default function CourseTerm() {
    const { course, termYear } = useParams()
    const currCourseTerm = getCourseTermId(course, termYear)
    const { data } = useQuery(COURSE_TERM_PAGE_COURSE, {
      fetchPolicy: 'cache-only',
      variables: { courseId: course, courseTermId: currCourseTerm }
    })
    const courseData = data?.courseCollection?.edges[0]?.node
    const courseTerms = courseData?.courseTermCollection?.edges
    return (
      <Box px={6}>
        <Heading as="h1" size="md" mt={6}>
          {courseData?.number} &ndash; {courseData?.title}
        </Heading>
        <Text fontSize={["sm", "md"]} color="gray.600">
          {courseData?.description}
        </Text>
        <Select mt={4} defaultValue={currCourseTerm}>
          {courseTerms?.map(courseTerm => (
            <option key={courseTerm.node.id} value={courseTerm.node.id}>
              {terms[courseTerm.node.term]} {courseTerm.node.year}
            </option>
          ))}
        </Select>
      </Box>
    )
  }
