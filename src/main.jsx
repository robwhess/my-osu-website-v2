import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'

import { client as apolloClient } from '@/lib/apollo'

import Root, { loader as rootLoader } from '@/pages/Root'
import Home, { loader as homePageLoader } from '@/pages/Home'
import Courses from '@/pages/Courses'
import Course, { loader as coursePageLoader } from '@/pages/Course'
import CourseTerm, { loader as courseTermPageLoader } from '@/pages/CourseTerm'

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
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePageLoader
      },
      {
        path: "courses",
        children: [
          { index: true, element: <Courses /> },
          {
            path: ":course",
            element: <Outlet />,
            loader: coursePageLoader,
            children: [
              { index: true, element: <Course /> },
              {
                path: ":term",
                element: <CourseTerm />,
                loader: courseTermPageLoader
              }
            ]
          }
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
