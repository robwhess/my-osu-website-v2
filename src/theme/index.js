import { extendTheme } from '@chakra-ui/react'

import colors from './colors'

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
    colors
})
