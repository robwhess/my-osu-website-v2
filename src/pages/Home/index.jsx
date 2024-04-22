/*
 * Home page.
 */
import {
  Container,
  VStack,
  Image,
  Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react'

import robImg from '@/static/rob.jpg'

import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactInfo'
import OfficeHours from './components/OfficeHours'

export default function Home() {
  return (
    <Container as="main" maxW="container.md" centerContent marginBlock={8}>
      <VStack w="100%">
        <Image src={robImg} alt="Photo of Rob" />
        <Tabs w="100%" marginTop={4}>
          <TabList>
            <Tab>About me</Tab>
            <Tab>Contact info</Tab>
            <Tab>Office hours</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><AboutMe /></TabPanel>
            <TabPanel><ContactInfo /></TabPanel>
            <TabPanel><OfficeHours /></TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}
