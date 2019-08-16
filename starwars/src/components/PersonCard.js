import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const PersonCard = (props) => {
    return(
        <Card> {/* just now realzing that I perhaps should not have chnaged the
        names of my components into these more generic terms when I imported them. 
        I mostly did the renames though just because I could, to practice doing it,
        so I will keep them for the project as reference. In the future though I will
        take more care with using more descriptive/specific naming conventions*/}
            <Image src='' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Born: {props.birth_year}</span>
                </Card.Meta>
            </Card.Content>

        <div>I am more than just a div I am a person I swear. See I have ID: {props.name}</div>
        </Card>
    );
};

export default PersonCard;