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
                        <h4>Add to cart / QTY</h4>
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