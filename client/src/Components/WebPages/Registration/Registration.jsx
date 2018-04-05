import React from 'react';
import { Divider, Card, Button, Image, Segment, Container, Form, Grid } from 'semantic-ui-react';


const Registration = (props) => {
    return (
        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Form >
                    <Grid columns={2}>
                        <Grid.Column>
                            <Form.Field >
                                <Form.Input label='first name' placeholder='First Name' name='firstName' />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field >
                                <Form.Input label='last name' placeholder='Last Name' name='lastName' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={1}>
                        <Grid.Column>
                            <Form.Field>
                                <Form.Input label='email' placeholder='johndoe@gmail.com' name='email' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Form.Field>
                                <Form.Input type='password' label='password' placeholder='password' name='password' />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <Form.Input type='password' label='confirm password' placeholder='confirm password' name='passcheck' />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                </Form>
            </Container>
        </Segment>
    )
}

export default Registration;


{/* 
                    

                    <Form.Field>
                        <Form.Input type='password' label='password' placeholder='password' name='password' />
                        <Form.Input type='password' label='confirm password' placeholder='confirm password' name='passcheck' />
                    </Form.Field>
                 */}