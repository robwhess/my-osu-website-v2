/*
 * Site header.
 */

import { useRef } from 'react'
import { useQuery } from '@apollo/client'
import {
  Heading,
  HStack, VStack, Flex,
  Image,
  IconButton,
  Link as ChakraLink,
  Skeleton,
  Alert, AlertIcon, AlertTitle, AlertDescription,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useDisclosure
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'

import { NAV_COURSES } from '@/lib/apollo/queries'

import { terms } from '@/lib/database/strings'

import logo from '@/static/rh-logo-transparent.png'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerBtnRef = useRef()

  /*
   * Fetch courses data from database and group courses by term.
   */
  const { data: coursesData, loading, error } = useQuery(NAV_COURSES, {
    fetchPolicy: 'cache-only'
  })
  const coursesByTerm = {};
  Object.keys(terms).forEach(term => {
    coursesByTerm[term] = coursesData?.courseCollection?.edges?.filter(edge => (
      edge.node.terms.includes(term)
    )) ?? []
  })

  return (
    <>
      <Flex justify="space-between" align="center">
        <IconButton
          aria-label="Open navigation drawer"
          icon={<MdMenu />}
          variant="ghost"
          colorScheme="gray"
          size="lg"
          fontSize="xxx-large"
          px={4}
          py={10}
          ref={drawerBtnRef}
          onClick={onOpen}
        />
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
      </Flex>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} finalFocusRef={drawerBtnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <ChakraLink as={ReactRouterLink} to="/" onClick={onClose}>
              <Image boxSize="50px" src={logo} alt="RH Logo" />
            </ChakraLink>
          </DrawerHeader>
          <DrawerBody>
            {error && (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                <AlertTitle>Error fetching navigation data.</AlertTitle>
                <AlertDescription>Please try again later.</AlertDescription>
              </Alert>
            )}
            {loading ? (
              <VStack align="start" spacing={3}>
                <Skeleton width="95%" height="24px" />
                <Skeleton width="87%" height="24px" />
                <Skeleton width="100%" height="24px" />
              </VStack>
            ) : (
              <>
                {/*
                  * Main part of drawer body is an accordion in which links to
                  * my courses are organized by term.
                  */}
                <Heading as="h2" fontWeight="semibold" pb={2}>Courses</Heading>
                <Accordion as="nav" allowMultiple defaultIndex={[0]}>
                  {Object.entries(terms).map(([ term, termName ]) => (
                    <AccordionItem key={term} border={0}>
                      <AccordionButton px={1}>
                        <AccordionIcon />
                        <Heading as="h3" size="lg" flex="1" textAlign="left" fontWeight="medium" pl={2}>{termName}</Heading>
                      </AccordionButton>
                      <AccordionPanel py={0}>
                        <VStack align="start" spacing={0}>
                          {coursesByTerm[term].map(course => (
                            <ChakraLink
                              as={ReactRouterLink}
                              key={course.node.id}
                              onClick={onClose}
                              to={`/courses/${course.node.id}`}
                              color="inherit"
                              width="100%"
                              p={2}
                              pl={3}
                              _hover={{ textDecor: "none", bg: "brand.50" }}
                            >
                              <Heading as="h4" size="md" fontWeight="thin">{course.node.number}</Heading>
                            </ChakraLink>
                          ))}
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
