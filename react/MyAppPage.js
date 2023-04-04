import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'

// Your component pages
import OldOrders from './components/OldOrders'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/_oldOrders" component={OldOrders} />
  </Fragment>
)

export default MyAppPage
