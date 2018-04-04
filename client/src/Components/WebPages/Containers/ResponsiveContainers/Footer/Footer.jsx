import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Icon
} from 'semantic-ui-react';

const footer = () => {
    return (
        <div>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Header inverted as='h4' content='Sitemap' />
                                <List link inverted>
                                    <List.Item as='a'>Home</List.Item>
                                    <List.Item as='a'>About</List.Item>
                                    <List.Item as='a'>Portfolio</List.Item>
                                    <List.Item as='a'>Contact</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header inverted as='h4'>
                                <div>吳孝天 LLC.</div>
                                <br/>
                                <div>Copyright <Icon name='copyright'/> 2018 </div>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as='h4' inverted>Contact Me!</Header>
                                <List link inverted>
                                    <List.Item >Phone : (714) 504-0820</List.Item>
                                    <List.Item >Email : daniel.oh1228@gmail.com</List.Item>
                                </List>                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}

export default footer;