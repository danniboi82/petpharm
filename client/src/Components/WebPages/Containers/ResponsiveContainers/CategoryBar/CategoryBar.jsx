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


const CategoryBar = (props) => {
    return (
        <div>
            <Menu
                style={{ textAlign: 'center' }}
            >
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Brand
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Pet
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Symptom
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    About
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Special
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Sign-in
                </Menu.Item>
                <Menu.Item
                    className='CateBar'
                    onClick={props.clicked}
                >
                    Register
                </Menu.Item>
            </Menu>
        </div>
    )
};


export default CategoryBar;