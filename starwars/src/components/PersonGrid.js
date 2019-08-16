import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersonCard from './PersonCard.js';

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
                <PersonCard name = {person.name}
                    birth_year = {person.birth_year}
                    hair_color = {person.hair_color}
                    gender = {person.gender}
                    skin_color = {person.skin_color}
                />)}
            <PersonCard />
        </> 
    );

};

export default PersonGrid;