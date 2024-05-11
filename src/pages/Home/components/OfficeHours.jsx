import { useQuery, gql } from '@apollo/client'
import {
  Stack,
  Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'

import EventCard from '@/components/EventCard'

const officeHoursQuery = gql`
  query {
    hoursCollection(filter: {
        personId: {eq: 1}
        type: {eq: office}
    }) {
        edges {
            node {
                id
                day
                start
                end
                location
                videoconferenceLink
                extraInfo
            }
        }
    }
  }
`

export default function OfficeHours() {
  const { data, loading, error } = useQuery(officeHoursQuery)
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
