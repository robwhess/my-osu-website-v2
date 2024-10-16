/*
 * Home page.
 */
import {
  Container,
  VStack,
  Image,
  Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import robImg from '@/static/rob.jpg'

import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactInfo'
import OfficeHours from './components/OfficeHours'

const tabs = {
  "about-me": { title: "About me", element: <AboutMe /> },
  "contact-info": { title: "Contact info", element: <ContactInfo /> },
  "office-hours": { title: "Office hours", element: <OfficeHours /> }
}

export default function Home() {
  const { hash } = useLocation()
  let tabIndex = Object.keys(tabs).indexOf(hash.slice(1))
  tabIndex = tabIndex < 0 ? 0 : tabIndex

  return (
    <Container as="main" maxW="container.md" centerContent marginBlock={8}>
      <VStack w="100%">
        <Image src={robImg} alt="Photo of Rob" />
        <Tabs isFitted isLazy w="100%" marginTop={4} index={tabIndex}>
          <TabList>
            {Object.keys(tabs).map(tab => <Tab key={tab}>{tabs[tab].title}</Tab>)}
          </TabList>
          <TabPanels>
            {Object.keys(tabs).map(tab => <TabPanel key={tab}>{tabs[tab].element}</TabPanel>)}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}
