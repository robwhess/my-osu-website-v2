/*
 * Site header.
 */

import { useRef } from 'react'
import {
  Heading,
  HStack, VStack, Flex,
  Image,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'

import logo from '@/static/rh-logo-transparent.png'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const drawerBtnRef = useRef()
  return (
    <>
      <Flex justify="space-between" align="center">
        <IconButton
          icon={<FaBars />}
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
          <DrawerBody>
            Nav
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
