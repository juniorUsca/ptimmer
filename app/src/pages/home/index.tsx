import React from 'react'
import { Helmet } from 'react-helmet-async'
import ButtonComponent from '../../components/button'

const Home = (): React.ReactElement => (
  <>
    <Helmet>
      <title>PTimmer</title>
      <meta name="description" content="Home of page" />
    </Helmet>
    Welcome

    <ButtonComponent />
  </>
)

export default Home
