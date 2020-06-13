import React from 'react'
import {
  CardHeader, Card, CardActions, CardContent, Avatar,
} from '@material-ui/core'
import { ProjectAvatar, TeamAvatar } from './styles'

const Project = (): React.ReactElement => (
  <>
    <Card>
      <CardHeader
        title="20 de enero del 2019"
        subheader="a subheader"
        action="test"
        titleTypographyProps={{
          variant: 'body2',
        }}
        subheaderTypographyProps={{
          variant: 'body2',
        }}
      />
      <CardContent>
        <ProjectAvatar
          alt="PROJECT NAME"
          src="logo/image"
        />
        NAME/SUMMARY
        <TeamAvatar
          max={3}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </TeamAvatar>
        STATE/TAGS
      </CardContent>
      <CardActions
        disableSpacing
      >
        3 ICON OPTIONS

      </CardActions>
    </Card>
  </>
)
export default Project
