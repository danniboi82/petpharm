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
  Search,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Heading from '../Heading/Heading';
import BG1 from '../../../../images/pet_background.jpg';
import './DesktopContainer.css';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            vertical={true}
            className='NavbarSeg'
            style={{ backgroundImage: `url(${BG1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', maxWidth: '100%', backgroundAttachment: 'fixed' }}
          >
            <Container borderless>
              <Menu
                className='NavbarDiv'
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                borderless
                secondary={!fixed}
                size='large'>
                <Container>
                  <Menu.Item>
                    <h1>Pet Pharm</h1>
                  </Menu.Item>
                  <Search
                      className = "SearchBar"
                    // loading={isLoading}
                    // onResultSelect={this.handleResultSelect}
                    // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    // results={results}
                    // value={value}
                    // {...this.props}
                  />
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
                      Products
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
                </Container>
              </Menu>
            </Container>
            <Heading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

export default DesktopContainer;