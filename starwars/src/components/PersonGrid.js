import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { default as Card} from './PersonCard.js';

const PersonGrid = () => {
    const [personArr, setPersonArr] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                console.log('data getted from SWAPI:', response.data.results);

                setPersonArr(response.data.results);
            })
            .catch(console.log('aint got nothin brah'))
    }, []);

    return(

        <>
            {personArr.map(person => 
                <Card name = {person.name}/>)}
            <Card />
        </> 
    );

};

export default PersonGrid;