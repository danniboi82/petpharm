import React from 'react';
import { Divider, Card, Button, Image, Segment, Container, Form, Grid } from 'semantic-ui-react';


const Registration = (props) => {
    return (
        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <h1>REGISTRATION</h1>
                <Grid stackable>
                    <Grid.Column width={10}>
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
                            <Grid columns={1}>
                                <Grid.Column>
                                    <Form.Field label="Yes, sign me up for special offers" control='input' type='checkbox' /> 
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column textAlign="center">
                                    <Form.Field>
                                        <Form.Button type='submit' equal>Register !!</Form.Button>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>
                        </Form>
                    </Grid.Column>

                    <Grid.Column width={6}>
                            <Image src="https://static1.squarespace.com/static/50eb5641e4b0684ae74d6dc0/t/511c623ae4b057ac416d149a/1365133766999/Dog-with-stethoscope.jpeg?format=300w" />
                    </Grid.Column>

                </Grid>
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