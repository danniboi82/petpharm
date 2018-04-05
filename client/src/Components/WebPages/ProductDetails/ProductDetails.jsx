import React from 'react';
import { Grid, Image, Card, Button, Dropdown, Breadcrumb, Segment, Container } from 'semantic-ui-react';

const ProductDetails = (props) => {
    return (
        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={8}>
                        <div className="ImageDiv">
                            <Image src='https://www.1800petmeds.com/images/products/group/Heartgard_Plus_large.jpg' />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h1>Heartgard Plus Chewables (product.name)</h1>
                        <h4>Pricing : $(product.price)</h4>
                        <h4>Select Pet's Weight : </h4>
                        <div className='petWeight'>
                            <Button>10-25lbs</Button>
                            <Button>26-50lbs</Button>
                            <Button>51-100lbs</Button>
                        </div>
                        <h4> Select Supply : </h4>
                        <div className='Supply'>
                            <Button>6 pack</Button>
                            <Button>12 pack</Button>
                        </div>

                        <h4> Select QTY</h4>
                        <Button primary type='submit' equal>Add to Cart</Button>
                        <Button color='red' type='submit' equal >Remove item</Button>
                    </Grid.Column>
                </Grid>

                <Grid columns={1}>
                    Product Slider
            </Grid>
            </Container>
        </Segment>
    )
}

export default ProductDetails;