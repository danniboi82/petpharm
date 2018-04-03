import React, { Component } from 'react'
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


const Heading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content="WELCOME TO PET PHARM"
      inverted
      style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
    />
    <Header
      as='h2'
      content='Get your pet high'
      inverted
      style={{ fontSize: '1.7em', fontWeight: 'normal' }}
    />
  </Container>
)

export default Heading;