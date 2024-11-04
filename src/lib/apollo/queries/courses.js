import { gql } from '@apollo/client'

/**
 * GraphQL uery to fetch course number, title, and terms for all courses.
 * Used to populate nav drawer.
 */
export const NAV_COURSES = gql`
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

/**
 * Query to fetch information about a specified course for its course page.
 *
 * @param id The database ID of the course to fetch.
 */
export const COURSE_PAGE_COURSE = gql`
  query coursePageCourse($id: String!) {
    courseCollection(filter: {
      id: {eq: $id}
    }) {
      edges {
        node {
          id
          number
          title
          description
          courseTermCollection (orderBy: [
            { year: DescNullsLast },
            { term: DescNullsLast }
          ]) {
            edges {
              node {
                term
                year
                id
              }
            }
          }
        }
      }
    }
  }
`
