import React from 'react';
import { Card, Button, Image, Segment, Container } from 'semantic-ui-react';

const petRx =
    [
        {
            name: "Heartgard",
            cost: 30,
            description: "protection from heartworms, roundworms, etc...",
            img: 'https://www.1800petmeds.com/images/products/group/Heartgard_Plus_large.jpg',
        },
        {
            name: "NexGard",
            cost: 60,
            description: "protection from tics & etc...",
            img: 'https://www.1800petmeds.com/images/products/group/10372-collage_420.jpg'
        },
        {
            name: "Trifexis",
            cost: 100,
            description: "chewable tablet that kills fleas and prevents infestations...",
            img: 'https://www.1800petmeds.com/images/products/group/11190_group_large.jpg',
        },
        {
            name: "Vetmedin",
            cost: 40,
            description: "chewable tablet that kills fleas and prevents infestations...",
            img: 'https://www.1800petmeds.com/images/products/420/10981_420.jpg',
        },
        {
            name: "Simparica",
            cost: 120,
            description: "chewable tablet that kills fleas and prevents infestations...",
            img: 'https://www.1800petmeds.com/images/products/group/11716_collage_420.jpg'
        },
        {
            name: "Interceptor Plus",
            cost: 90,
            description: "chewable tablet that kills fleas and prevents infestations...",
            img: "https://www.1800petmeds.com/images/products/group/11710_group.jpg"
        },
    ]

const ProdGrid = (props) => {
    return (
        <Segment>
            <Container>
                <div className='ProdGridWrapper'>
                    <p>Popular Rx</p>
                    <Card.Group>
                        {petRx.map(drug => (
                            <Card
                                key={drug.img}
                            >
                                <Image src={drug.img} alt="" />
                                <Card.Content>
                                    <Card.Header>
                                        {drug.name}
                                    </Card.Header>
                                    <Card.Description>
                                        <p>Price :${drug.cost}</p>
                                        <p>Description : {drug.description} </p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                </div>
            </Container>
        </Segment>

    )
};

export default ProdGrid;