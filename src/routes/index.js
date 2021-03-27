import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import Route from './Route'

import SignUp from '~/pages/SignUp'
import SignIn from '~/pages/SignIn'

import Dashboard from '~/pages/Dashboard'
import Profile from '~/pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}
