import { useQuery } from '@apollo/client'
import {
  Stack,
  Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'

import { PERSON_OFFICE_HOURS } from '@/lib/apollo/queries'

import EventCard from '@/components/EventCard'

export default function OfficeHours() {
  const { data: officeHoursData, loading, error } = useQuery(PERSON_OFFICE_HOURS, {
    fetchPolicy: 'cache-only',
    variables: { personId: 1 }
  })
  return (
    <>
      {error && (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          <AlertTitle>Error fetching office hours.</AlertTitle>
          <AlertDescription>Please try again later.</AlertDescription>
        </Alert>
      )}
      <Stack direction={["column", "column", "row"]} spacing={3}>
        {loading && <EventCard skeleton />}
        {officeHoursData?.hoursCollection?.edges?.map(edge => (
          <EventCard key={edge.node.id} {...edge.node} />
        ))}
      </Stack>
    </>
  )
}
