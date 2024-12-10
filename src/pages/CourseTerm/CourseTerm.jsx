import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import {
  Box,
  Heading,
  Text,
  Select
} from '@chakra-ui/react'

import { COURSE_TERM_PAGE_COURSE } from '@/lib/apollo/queries'

import { terms } from '@/lib/database/strings'
import { getTermYearCode } from '@/lib/database/utils'

export default function CourseTerm() {
    const { course, term } = useParams()
    const { data } = useQuery(COURSE_TERM_PAGE_COURSE, {
      fetchPolicy: 'cache-only',
      variables: { courseId: course, termId: term }
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
        <Select mt={4}>
          {courseTerms?.map(courseTerm => (
            <option
              key={courseTerm.node.id}
              value={courseTerm.node.id}
              selected={term === getTermYearCode(courseTerm.node.term, courseTerm.node.year)}
            >
              {terms[courseTerm.node.term]} {courseTerm.node.year}
            </option>
          ))}
        </Select>
      </Box>
    )
  }
