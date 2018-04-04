import React from 'react';
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
} from 'semantic-ui-react';
import './CategoryBar.css';


const CategoryBar = () => {
    return (
        <div>
            <Menu
                style={{textAlign: 'center'}}
            >
                <Menu.Item
                    className='CateBar'
                >
                    Brand
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    Pet
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    Symptom
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    About
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    Special
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    Sign-in
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                >
                    Register
                </Menu.Item>
            </Menu>
        </div>
    )
};


export default CategoryBar;