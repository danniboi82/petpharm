import React from 'react';
import { Divider, Card, Button, Image, Segment, Container, Form, Grid } from 'semantic-ui-react';
import './Signin.css';

const SignIn = (props) => {
    return (
        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <h1>Sign-In</h1>
                <Grid stackable>
                    <Grid.Column width={8}>
                        <Form >
                            <Grid columns={1}>
                                <Grid.Column>
                                    <Form.Field >
                                        <Form.Input label='Username/Email' placeholder='Username/Email' name='username' />
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column>
                                    <Form.Field >
                                        <Form.Input type='password' label='Password' placeholder='Password' name='password' />
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>

                            <Grid columns={1}>
                                <Grid.Column>
                                    <Form.Field label="Remember Me" control='input' type='checkbox' />
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column textAlign="center" >
                                    <Form.Field >
                                        <Form.Button type='submit' style={{ width: '100%' }}>Sign-In !!</Form.Button>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid>
                        </Form>
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <Container textAlign='center' className="wrapper">
                            <Container  textAlign='left'>
                                <div className="wrappedText">
                                    <h3>Register w/ Pet Pharm for a enhanced shopping experience and faster checkout</h3>
                                    <h5>Benefits include : </h5>
                                    <ul>
                                        <li> Faster checkout with stored address and payment information</li>
                                        <li>Keep track of previous orders (brand, etc..)</li>
                                        <li>Exclusive offers!!</li>
                                    </ul>
                                </div>
                            </Container>
                            <Button primary className='registerButton'>
                                Register
                            </Button>
                        </Container>
                    </Grid.Column>

                </Grid>
            </Container>
        </Segment >
    )
}

export default SignIn;


