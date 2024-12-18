import { useParams, Navigate } from 'react-router'
import { useQuery } from '@apollo/client'
import {
  Box,
  Heading,
  Text,
  Alert, AlertIcon, AlertDescription
} from '@chakra-ui/react'

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
    return (
      <Box px={6}>
        <Heading as="h1" size="md" mt={6}>
          {courseData?.number} &ndash; {courseData?.title}
        </Heading>
        <Text fontSize={["sm", "md"]} color="gray.600">
          {courseData?.description}
        </Text>

        <Alert status="warning" variant="left-accent" mt={8}>
          <AlertIcon />
          <AlertDescription>There are no recent offerings of this course to display.</AlertDescription>
        </Alert>
      </Box>
    )
  }
}
