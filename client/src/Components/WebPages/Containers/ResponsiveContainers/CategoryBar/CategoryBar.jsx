import React from 'react';
import {Link} from 'react-router-dom';
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
    Visibility
} from 'semantic-ui-react';
import './CategoryBar.css';

const CategoryBar = (props) => {
    return (
        <div>
            <Menu
                secondary={props.secondary}
                fixed={props.fixed}
                pointing={props.pointing}
                style={{
                textAlign: 'center'
            }}>
                <Menu.Item
                    as={Link}
                    to='/registration'
                    className='CateBar'
                    onClick={props.clicked}>
                    Brand
                </Menu.Item>
                <Menu.Item as={Link} to='/signin' className='CateBar' onClick={props.clicked}>
                    Sign-in Page
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/productDetails'
                    className='CateBar'
                    onClick={props.clicked}>
                    Product Page
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/customerInfo'
                    className='CateBar'
                    onClick={props.clicked}>
                    About
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/customerInfo'
                    className='CateBar'
                    onClick={props.clicked}>
                    catebarItem
                </Menu.Item>
                <Menu.Item as={Link} to='/signin' className='CateBar' onClick={props.clicked}>
                    catebarItem
                </Menu.Item>
                <Menu.Item as={Link} to='/signin' className='CateBar' onClick={props.clicked}>
                    catebarItem
                </Menu.Item>
            </Menu>
        </div>
    )
};

export default CategoryBar;