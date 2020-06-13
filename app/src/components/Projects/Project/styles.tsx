import React from 'react'
import styled from 'styled-components'
import {
  Avatar,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'

export const ProjectAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
`

export const TeamAvatar = styled(({ ...rest }): React.ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AvatarGroup classes={{ avatar: 'avatarr' }} {...rest} />
))`
  .avatarr {
    background: red;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
`
