import React, { createContext, useState } from 'react'

interface MainContext {
  isAuth: boolean
  activateAuth(token: string): void
  disableAuth(): void
  urlPath: string
}
export const Context = createContext<MainContext>({
  isAuth: false,
  activateAuth: () => {},
  disableAuth: () => {},
  urlPath: '',
})

export const Provider = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => {
  let urlPath
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    urlPath = ''
  } else {
    // production code
    // urlPath = '/suburl'
    urlPath = ''
  }

  const initialAuth = Boolean(window.localStorage.getItem('token'))
  const [isAuth, setIsAuth] = useState(initialAuth)

  const value: MainContext = {
    isAuth,
    activateAuth: (token) => {
      window.localStorage.setItem('token', token)
      setIsAuth(true)
      // navigate('/')
    },
    disableAuth: () => {
      window.localStorage.removeItem('token')
      setIsAuth(false)
      // navigate('/')
    },
    urlPath,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
