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
import DesktopContainer from './ResponsiveContainers/DesktopContainer';
import MobileContainer from './ResponsiveContainers/MobileContainer';
import TabletContainer from './ResponsiveContainers/TabletContainer';

const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
      <TabletContainer>{children}</TabletContainer>
</div>
  )
  
  
export default ResponsiveContainer;