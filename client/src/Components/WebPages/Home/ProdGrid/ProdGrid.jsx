import React from 'react';
import {Card, Button, } from 'semantic-ui-react';

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
        <div className='ProdGridWrapper'>
            <Card.Group>
                <p>Popular Rx</p>
                {petRx.map(drug => (
                    <Card
                        image={drug.img}
                    >
                    <img src={drug.img} alt=""/>
                    </Card>
                ))}
            </Card.Group>
        </div>
    )
};

export default ProdGrid;