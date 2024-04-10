import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import colors from './colors'

import Link from './components/link'

const styles = {
  global: {
    body: {
      bg: "gray.50",
      color: "gray.900"
    }
  }
}

export default extendTheme({
  styles,
  colors,
  components: {
    Link
  }
}, withDefaultColorScheme({ colorScheme: "brand" }))
