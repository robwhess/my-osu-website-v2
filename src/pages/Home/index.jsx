/*
 * Home page.
 */
import {
  Container,
  VStack,
  Image,
  Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const { hash } = useLocation()
  let tabIndex = Object.keys(tabs).indexOf(hash.slice(1))
  tabIndex = tabIndex < 0 ? 0 : tabIndex

  function handleTabChange(index) {
    const tabKey = tabKeys[index]
    if (tabKey) {
      navigate(`#${tabKey}`)
    }
  }

  return (
    <Container as="main" maxW="container.md" centerContent marginBlock={8}>
      <VStack w="100%">
        <Image src={robImg} alt="Photo of Rob" />
        <Tabs isFitted isLazy w="100%" marginTop={4} index={tabIndex} onChange={handleTabChange}>
          <TabList>
            {tabKeys.map(tabKey => <Tab key={tabKey}>{tabs[tabKey].title}</Tab>)}
          </TabList>
          <TabPanels>
            {tabKeys.map(tabKey => <TabPanel key={tabKey}>{tabs[tabKey].element}</TabPanel>)}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}
