import { gql } from '@apollo/client'

/**
 * GraphQL uery to fetch office hours for a specified person.
 *
 * @param personId The database ID of the person whose office hours should be
 *   fetched.
 */
export const PERSON_OFFICE_HOURS = gql`
  query getPersonOfficeHours($personId: Int!) {
    hoursCollection(filter: {
        personId: {eq: $personId}
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
