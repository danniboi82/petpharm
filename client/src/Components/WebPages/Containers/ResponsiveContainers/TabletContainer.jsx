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
  Search,
  Visibility,
} from 'semantic-ui-react'
import './TabletContainer.css'
import Footer from './Footer/Footer';
import BG1 from '../../../../images/pet_background.jpg';

class TabletContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyTablet}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item>
              <h1>Pet Pharm</h1>
            </Menu.Item>

            <Menu.Item position='right'>
              <Menu.Item
                name='top'
                href='#Top'
                active={activeItem === 'top'}
                onClick={this.handleItemClick}>
                <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                Home
                                    </Menu.Item>
              <Menu.Item
                href='#About'
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}>
                <Icon name='user outline' size='small' />
                About
                                    </Menu.Item>
              <Menu.Item
                href='#Products'
                name='products'
                active={activeItem === 'products'}
                onClick={this.handleItemClick}>
                <Icon name='code' size='small' />
                Portfolio
                                    </Menu.Item>
              <Menu.Item
                name='contact'
                href='#Contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}>
                <Icon name='mail outline' size='small' />
                Contact
                                    </Menu.Item>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment
              inverted textAlign='center'
              className='SidebarSeg'
              vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='left'>
                    <Search
                      className="SearchBar"
                    // loading={isLoading}
                    // onResultSelect={this.handleResultSelect}
                    // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    // results={results}
                    // value={value}
                    // {...this.props}
                    />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <h1>Pet Pharm</h1>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer/>
      </Responsive>
    )
  }
}



export default TabletContainer;
