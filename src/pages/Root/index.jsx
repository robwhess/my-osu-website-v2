/*
 * Root layout for React Router setup.
 */

import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
          <h1>Rob Hess - Oregon State University</h1>
          <Outlet />
        </>
      )
}
