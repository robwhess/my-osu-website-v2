/*
 * Site header.
 */

import { useQuery } from '@apollo/client'
import {
  Heading,
  HStack, VStack, Flex,
  Image,
  IconButton,
  Button,
  Link as ChakraLink,
  Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider,
  useBreakpointValue
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { MdMenu, MdExpandMore } from 'react-icons/md'

import { NAV_COURSES } from '@/lib/apollo/queries'

import { terms } from '@/lib/database/strings'

import logo from '@/static/rh-logo-transparent.png'

export default function Header() {
  /*
   * Fetch courses data from database and group courses by term.
   */
  const { data: coursesData } = useQuery(NAV_COURSES, {
    fetchPolicy: 'cache-only'
  })
  const coursesByTerm = {};
  Object.keys(terms).forEach(term => {
    coursesByTerm[term] = coursesData?.courseCollection?.edges?.filter(edge => (
      edge.node.terms.includes(term)
    )) ?? []
  })

  const menuButton = useBreakpointValue({
    base: <MenuButton
      as={IconButton}
      aria-label="Open navigation menu"
      icon={<MdMenu />}
      variant="ghost"
      colorScheme="gray"
      size="lg"
      fontSize="xx-large"
    />,
    md: (
      <MenuButton
        as={Button}
        aria-label="Open navigation menu"
        rightIcon={<MdExpandMore />}
        variant="ghost"
        colorScheme="gray"
        size="lg"
      >
        Courses
      </MenuButton>
    )
  })

  return (
    <Flex justify="space-between" align="center">
      <HStack as="header" justify="end" align="center" spacing={3} my={4} mx={2}>
        <ChakraLink as={ReactRouterLink} to="/">
          <Image boxSize={["70px", "80px"]} src={logo} alt="RH Logo" />
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/" color="inherit" _hover={{ textDecor: "none" }}>
          <VStack align="start" spacing={0}>
            <Heading as="h1" size="2xl" fontWeight="thin">Rob Hess</Heading>
            <Heading as="h2" size={["sm", "md"]} fontWeight="thin">Oregon State University</Heading>
          </VStack>
        </ChakraLink>
      </HStack>
      <Menu>
        {menuButton}
        <MenuList>
          {Object.entries(terms).map(([ term, termName ], i, array) => (
            <MenuGroup key={term} title={termName}>
              {coursesByTerm[term].map(course => (
                <MenuItem
                  as={ReactRouterLink}
                  key={course.node.id}
                  to={`/courses/${course.node.id}`}
                >
                  {course.node.number}
                </MenuItem>
              ))}
              {i < array.length - 1 && <MenuDivider />}
            </MenuGroup>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}
