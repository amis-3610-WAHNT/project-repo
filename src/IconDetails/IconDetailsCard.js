import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import IngredientList from "./IngredientList";


export default function IconDetailsCard(props) {

    const requiredIngredients = props.cocktail.ingredients;
    

    return (
        <Card border="light">
            <Card.Body>
                <Card.Title>{props.cocktail.name}</Card.Title>

                <Card.Subtitle>Ingredients</Card.Subtitle>
                <CardColumns>
                    {requiredIngredients.map(i => (
                         <IngredientList ingredients={i} key={i.index} />
                    ))}
                </CardColumns>
                <Card.Text></Card.Text>
                
                <Card.Subtitle>Directions</Card.Subtitle>
                <Card border="light">{props.cocktail.directions}</Card>


            </Card.Body>
        </Card>
    );
}