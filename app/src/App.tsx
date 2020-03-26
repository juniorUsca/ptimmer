import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Context } from './context'
import Home from './pages/home'

const App = (): React.ReactElement => {
  const { urlPath, isAuth } = useContext(Context)
  return (
    <main role="application">
      <Switch>
        {isAuth && (
          <Route
            path={`${urlPath}`}
            exact
          >
            <Home />
          </Route>
        )}
        {!isAuth && (
          <Route
            path={`${urlPath}`}
            exact
          >
            LOGIN/REGISTER
          </Route>
        )}
      </Switch>
    </main>
  )
}

export default App
