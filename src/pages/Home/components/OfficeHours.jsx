import { useQuery, gql } from '@apollo/client'
import { Stack } from '@chakra-ui/react'

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data?.hoursCollection?.edges && (
        <Stack direction={["column", "column", "row"]} spacing={3}>
          {data.hoursCollection.edges.map(node => (
            <EventCard key={node.node.id} {...node.node} />
          ))}
        </Stack>
      )}
    </>
  )
}
