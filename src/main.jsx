import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'

import { client as apolloClient } from '@/lib/apollo'

import Root from '@/pages/Root'
import Home from '@/pages/Home'
import Courses from '@/pages/Courses'
import Course from '@/pages/Course'

import theme from '@/theme'

import pkg from '../package.json'

/*
 * Figure out base pathname based on "homepage" property in package.json.
 */
const siteUrl = pkg.homepage
const basename = siteUrl ? new URL(siteUrl).pathname : ""

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "courses",
        children: [
          { index: true, element: <Courses /> },
          { path: ":course", element: <Course /> }
        ]
      }
    ]
  }
], { basename })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
)
