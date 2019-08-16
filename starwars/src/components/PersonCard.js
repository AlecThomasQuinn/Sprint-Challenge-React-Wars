import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const PersonCard = (props) => {
    return(
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Born: {props.birth_year}</span>
                </Card.Meta>
                <Card.Description>
                    {props.name} is a {props.hair_color}-haired {props.gender} with {props.skin_color} skin.
                </Card.Description>
            </Card.Content>

        {/* <div>I am more than just a div I am a person I swear. See I have ID: {props.name}</div> */}
        </Card>
    );
};

export default PersonCard;