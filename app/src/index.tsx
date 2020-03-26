import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from './context'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <Provider>
        <App />
      </Provider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('app'),
)
