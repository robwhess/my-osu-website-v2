/*
 * Site header.
 */

import { Heading, HStack, VStack, Image, Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

import logo from '@/static/rh-logo-transparent.png'

export default function Header() {
  return (
    <HStack as="header" justify="end" align="start" spacing={1} marginBlock={4} marginInline={2}>
      <ChakraLink as={ReactRouterLink} to="/" color="inherit" _hover={{ textDecor: "none" }}>
        <VStack align="end" spacing={0}>
          <Heading as="h1" size="2xl" fontWeight="thin">Rob Hess</Heading>
          <Heading as="h2" size={["sm", "md"]} fontWeight="thin">Oregon State University</Heading>
        </VStack>
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/">
        <Image boxSize={["70px", "80px"]} src={logo} alt="RH Logo" />
      </ChakraLink>
    </HStack>
  )
}
