/*
 * Home page.
 */

import { useEffect, useState } from 'react'
import {
  Container,
  VStack, Flex,
  Image,
  Tabs, TabList, Tab, TabPanels, TabPanel,
  IconButton
} from '@chakra-ui/react'
import { useLocation, Link } from 'react-router'
import { FaLink } from 'react-icons/fa6'

import robImg from '@/static/rob.jpg'

import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactInfo'
import OfficeHours from './components/OfficeHours'

const tabs = Object.freeze({
  "about-me": { title: "About me", element: <AboutMe /> },
  "contact-info": { title: "Contact info", element: <ContactInfo /> },
  "office-hours": { title: "Office hours", element: <OfficeHours /> }
})
const tabKeys = Object.keys(tabs)

export default function Home() {
  const [ tabIndex, setTabIndex ] = useState(0)
  const { hash } = useLocation()

  /*
   * Make sure the current tab is synchronized with the URL hash if the hash
   * changes.
   */
  useEffect(() => {
    const idx = Math.max(0, Object.keys(tabs).indexOf(hash.slice(1)))
    setTabIndex(idx)
  }, [ hash ])

  function handleTabChange(idx) {
    setTabIndex(idx)
  }

  return (
    <Container as="main" maxW="container.md" centerContent marginBlock={8}>
      <VStack w="100%">
        <Image src={robImg} alt="Photo of Rob" />
        <Tabs isFitted isLazy w="100%" marginTop={4} index={tabIndex} onChange={handleTabChange}>
          <Flex w="100%">
            <TabList flexGrow="1">
              {tabKeys.map(tabKey => (<Tab key={tabKey}>{tabs[tabKey].title}</Tab>))}
            </TabList>
            <IconButton
              icon={<FaLink />}
              variant="link"
              as={Link}
              to={`#${tabKeys[tabIndex]}`}
              size="lg"
              color="inherit"
            />
          </Flex>
          <TabPanels>
            {tabKeys.map(tabKey => <TabPanel key={tabKey}>{tabs[tabKey].element}</TabPanel>)}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}
