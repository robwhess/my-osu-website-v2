import {
  Text,
  Link,
  TableContainer, Table, Tbody, Tr, Td
} from '@chakra-ui/react'

export default function ContactInfo() {
  return (
    <TableContainer maxW="100%">
      <Table variant="unstyled" size={["sm", "md"]}>
        <Tbody>
          <Tr>
            <Td textAlign="right" verticalAlign="baseline">
              <Text fontSize={["sm", "lg"]}>Email</Text>
            </Td>
            <Td><Link href="mailto:hessro@oregonstate.edu" isExternal>hessro@oregonstate.edu</Link></Td>
          </Tr>
          <Tr>
            <Td textAlign="right" verticalAlign="baseline">
              <Text fontSize={["sm", "lg"]}>Office</Text>
            </Td>
            <Td>
              <Text>
                <Link href="https://map.oregonstate.edu/?building=KEC" isExternal>1109 Kelley Engineering Center</Link>
              </Text>
              <Text>School of EECS</Text>
              <Text>Oregon State University</Text>
              <Text>Corvallis, OR 97331</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
