import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@material-ui/core'
import ListOfProjects from '../../components/Projects/ListOfProjects'

const Projects = (): React.ReactElement => (
  <>
    <Helmet>
      <title>PTimmer</title>
      <meta name="description" content="Projects of WORKSPACE" />
    </Helmet>

    <Button variant="contained" color="primary">
      Create a new Project
    </Button>

    <br />

    <ListOfProjects />
  </>
)

export default Projects
