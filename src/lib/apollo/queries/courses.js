import { gql } from '@apollo/client'

/**
 * GraphQL uery to fetch course number, title, and terms for all courses.
 * Used to populate nav drawer.
 */
export const COURSES_FOR_NAV = gql`
  query getAllCourses {
    courseCollection {
      edges {
        node {
          id
          number
          title
          terms
        }
      }
    }
  }
`
