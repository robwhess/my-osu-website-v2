/*
 * Root layout for React Router setup.
 */

import { Outlet } from 'react-router'
import { Container } from '@chakra-ui/react'

import Header from './components/Header'

export default function Root() {
  return (
    <Container maxW="8xl">
      <Header />
      <Outlet />
    </Container>
  )
}
