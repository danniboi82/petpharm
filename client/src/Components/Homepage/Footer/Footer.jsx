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
                                    <List.Item as='a'>Products</List.Item>
                                    <List.Item as='a'>Contact</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Header inverted as='h4'>
                                    <div>Pet Pharm LLC.</div>
                                    <br />
                                    <div>Copyright <Icon name='copyright' /> 2018 </div>
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as='h4' inverted>Contact Us!</Header>
                                <List link inverted>
                                    <List.Item >Phone : (714) XXX-XXXX</List.Item>
                                    <List.Item >Email : pet_pharm@gmail.com</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}

export default footer;