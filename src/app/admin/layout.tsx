import ChildrenType from '@/types/children'
import React, { Fragment } from 'react'

const Layout = ({children}:ChildrenType) => {
  return (
    <Fragment>
        <header>Admin header</header>
        <main>{children}</main>
        <footer>Admin footer</footer>
    </Fragment>
  )
}

export default Layout