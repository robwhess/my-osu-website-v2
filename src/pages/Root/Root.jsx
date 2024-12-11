/*
 * Root layout for React Router setup.
 */

import { Outlet } from 'react-router'

import Header from './components/Header'

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
