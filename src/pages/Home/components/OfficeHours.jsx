import { useQuery } from '@apollo/client'
import {
  Stack,
  Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'

import { OFFICE_HOURS } from '@/lib/apollo/queries'

import EventCard from '@/components/EventCard'

export default function OfficeHours() {
  const { data, loading, error } = useQuery(OFFICE_HOURS, {
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
        {data && data?.hoursCollection?.edges && (
          data.hoursCollection.edges.map(node => (
            <EventCard key={node.node.id} {...node.node} />
          ))
        )}
      </Stack>
    </>
  )
}
