import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import ResponsiveContainer from './Containers/ResponsiveContainer';
import ScrollableAnchor from 'react-scrollable-anchor';
import Registration from './Registration/Registration';
import Homepage from './Home/HomePage';
import SignIn from './SignIn/Signin';
import ProductDetails from './ProductDetails/ProductDetails';
import CustomerInfo from './ShippingCheckout/CustomerInfo/CustomerInfo';
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */




const MainContainer = () => (
  <BrowserRouter>
    <ResponsiveContainer>
      <Switch>
        <Route exact path='/' render={Homepage} />
        <Route path='/signin' render={SignIn} />
        <Route path='/registration' render={Registration} />
        <Route path='/productDetails' render={ProductDetails} />
        <Route path='/customerInfo' render={CustomerInfo} />
      </Switch>
    </ResponsiveContainer>
  </BrowserRouter>
)

export default MainContainer;