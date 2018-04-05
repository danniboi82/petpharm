import React from 'react';
import { Form, Button, Grid, Segment, Dropdown, Container, Divider } from 'semantic-ui-react';
import { States, Country } from '../../../../common';



const CustomerInfo = (props) => {
    return (

        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={10}>
                        <h3>Customer Information</h3>
                        <Form>
                            <Form.Input type='text' name='username' placeholder='Username' />
                        </Form>
                        <h3>Shipping Information</h3>
                        <Grid>
                            <Grid.Column width={8}>
                                <Form>
                                    <Form.Input type='text' name='firstName' placeholder='First Name' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Form>
                                    <Form.Input type='text' name='lastName' placeholder='Last Name' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Form>
                                    <Form.Input type='text' name='company' placeholder='Company (optional)' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Form>
                                    <Form.Input type='text' name='address' placeholder='Address' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Input type='text' name='lastName' placeholder='Apt # (optional)' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Form>
                                    <Form.Dropdown type='text' name='country' placeholder='Country' options={Country} selection/>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Form>
                                    <Form.Dropdown type='text' name='state' placeholder='State' options={States} selection/>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Input type='text' name='zipcode' placeholder='ZIPCODE' />
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>

                    <Grid.Column width={6} style={{ border: '1px solid #DCDCDC' }}>
                        <Container>
                            <h2>Summary</h2>
                            <p>Sub-Total: $ (product.price)</p>
                            <p>Shipping : $ (product.shipping)</p>
                            <p>Tax : $ (product.price * (stateTax))</p>
                            <Form.Group>
                                <Form.Input type='text' name='coupon' placeholder='Enter Code' style={{ display: 'inline-block' }} />
                                <Form.Button style={{ display: 'inline-block' }}>Apply</Form.Button>
                            </Form.Group>
                            <h5>Total : $(product.price + shipping + tax)</h5>
                            <Button>Go to Shipping</Button>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>

    )
}

export default CustomerInfo;