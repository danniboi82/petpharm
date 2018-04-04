import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


const MobileHeading = ({ mobile }) => (
  <Container text>
    <Header
      inverted
      style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
    />
  </Container>
)

export default MobileHeading;