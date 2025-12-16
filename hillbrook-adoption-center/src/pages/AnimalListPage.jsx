import React from 'react';
import { Table } from 'react-bootstrap';
import AnimalList from "../components/AnimalList";

const AnimalListPage= () => {
//Mock data:
const animals = [ 
    {
        Id: 1,
        Name: "Dobby",
        Born: 2017,
        Description: "Funny and charming boy who loves running and fetching. Barks at children, so a home with all grown ups would be perfect.",
        ImageUrl: "/images/Dobby.png"
    },
    {
        Id: 2,
        Name: "Arwen",
        Born: 2018,
        Description: "Sweet but strong girl who loves being the center of attention. This girl will need lots of mental stimuli, in addition to her walks",
        ImageUrl: "/images/arwen.png"
    }
    ];

    return(
        <div>
            <h1>Available for adoption</h1>
            <p>Contact us through this link if you are interested in adoption. </p>
            <AnimalList/>
        </div>

    )

}

export default AnimalListPage;