import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { COURSE_PAGE_COURSE } from '@/lib/apollo/queries'
import {
  Box,
  Heading,
  Select
} from '@chakra-ui/react'

import { terms } from '@/lib/database/strings'

export default function Course() {
    const { course } = useParams()
    const { data } = useQuery(COURSE_PAGE_COURSE, {
      fetchPolicy: 'cache-only',
      variables: { id: course }
    })
    const courseData =data?.courseCollection?.edges[0]?.node
    const courseTerms = courseData?.courseTermCollection?.edges
    return (
      <Box px={6}>
        <Heading as="h1" size="md" mt={6} mb={4}>
          {courseData?.number} &ndash; {courseData?.title}
        </Heading>
        <Select>
          {courseTerms?.map(courseTerm => (
            <option key={courseTerm.node.id} value={courseTerm.node.id}>
              {terms[courseTerm.node.term]} {courseTerm.node.year}
            </option>
          ))}
        </Select>
      </Box>
    )
  }
