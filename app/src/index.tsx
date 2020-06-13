import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { StylesProvider } from '@material-ui/core'
import { Provider } from './context'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </Provider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('app'),
)
