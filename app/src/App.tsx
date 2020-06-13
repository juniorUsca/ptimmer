import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Context } from './context'
import Home from './pages/home'
import Projects from './pages/projects'

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
          <>
            <Route
              path={`${urlPath}/`}
              exact
            >
              <Home />
              {/* LOGIN/REGISTER */}
            </Route>
            <Route
              path={`${urlPath}/projects`}
              exact
            >
              <Projects />
            </Route>
          </>
        )}
      </Switch>
    </main>
  )
}

export default App
