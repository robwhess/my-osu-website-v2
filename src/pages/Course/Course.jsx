import { useParams, Navigate, Outlet } from 'react-router'
import { useQuery } from '@apollo/client'
import {
  Box,
  Flex, Spacer,
  Heading,
  Text,
  Select,
  Alert, AlertIcon, AlertDescription
} from '@chakra-ui/react'

import { COURSE_PAGE_COURSE } from '@/lib/apollo/queries'

import { terms } from '@/lib/database/strings'
import { getCourseTermId, getTermYearCode } from '@/lib/database/utils'

export default function Course() {
  const { course, termYear } = useParams()
  const currCourseTerm = termYear && getCourseTermId(course, termYear)

  const { data } = useQuery(COURSE_PAGE_COURSE, {
    fetchPolicy: 'cache-only',
    variables: { id: course }
  })
  const courseData = data?.courseCollection?.edges[0]?.node
  const courseTerms = courseData?.courseTermCollection?.edges
  const latestCourseTerm = courseTerms[0]?.node

  if (!currCourseTerm && latestCourseTerm) {
    /*
     * If no course/term is selected and at least one course/term exists,
     * navigate to the page for the most recent course/term.
     */
    return <Navigate to={`${getTermYearCode(latestCourseTerm.term, latestCourseTerm.year)}`} />
  } else {
    return (
      <Box mx={6} mt={6}>
        <Flex direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "center" }}>
          <Box>
            <Heading as="h1" size="md">
              {courseData?.number} &ndash; {courseData?.title}
            </Heading>
            <Text fontSize={["sm", "md"]} color="gray.600">
              {courseData?.description}
            </Text>
          </Box>
          {latestCourseTerm && (
            /*
             * If we have at least one course/term, display a dropdown menu to
             * allow the user to select the course/term they want to view.
             */
            <>
              <Spacer />
              <Box minWidth="xs" mt={{ base: 4, md: 0 }}>
                <Select defaultValue={currCourseTerm}>
                  {courseTerms.map(courseTerm => (
                    <option key={courseTerm.node.id} value={courseTerm.node.id}>
                      {terms[courseTerm.node.term]} {courseTerm.node.year}
                    </option>
                  ))}
                </Select>
              </Box>`
            </>
          )}
        </Flex>

        {!latestCourseTerm && (
          /*
           * If we don't have at least one course/term, show an alert.
           */
          <Alert status="warning" variant="left-accent" mt={8}>
            <AlertIcon />
            <AlertDescription>There are no recent offerings of this course to display.</AlertDescription>
          </Alert>
        )}

        <Box mt={4}>
          <Outlet />
        </Box>
      </Box>
    )
  }
}
