import React from 'react'
import { Helmet } from 'react-helmet-async'

const Home = (): React.ReactElement => (
  <>
    <Helmet>
      <title>PTimmer</title>
      <meta name="description" content="Home of page" />
    </Helmet>
    Welcome
  </>
)

export default Home
