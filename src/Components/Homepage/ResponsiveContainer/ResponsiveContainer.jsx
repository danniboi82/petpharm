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
import DesktopContainer from './Containers/DesktopContainer';
import MobileContainer from './Containers/MobileContainer';
import TabletContainer from './Containers/TabletContainer';


const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
      <TabletContainer>{children}</TabletContainer>
</div>
  )
  
  
export default ResponsiveContainer;