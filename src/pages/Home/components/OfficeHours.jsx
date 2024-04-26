import { useQuery, gql } from '@apollo/client'
import { UnorderedList, ListItem } from '@chakra-ui/react'

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
        <UnorderedList>
          {data.hoursCollection.edges.map(node => (
            <ListItem key={node.node.id}>{node.node.day} {node.node.start} &ndash; {node.node.end}</ListItem>
          ))}
        </UnorderedList>
      )}
    </>
  )
}
