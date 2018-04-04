import React, { Component } from 'react';
import BG1 from '../../../images/pet_background.jpg';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react';
import './Intro.css';



export default class Intro extends Component {
    state = {}

    render() {

        return (
            <div>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={BG1}
                                    centered
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={BG1}
                                    centered
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={BG1}
                                    centered
                                />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={BG1}
                                    centered
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


            </div>
        )
    }
}