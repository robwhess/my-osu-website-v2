/*
 * Root layout for React Router setup.
 */

import { Outlet } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

export default function Root() {
    return (
        <>
          <Heading as="h1">Rob Hess - Oregon State University</Heading>
          <Outlet />
        </>
      )
}
