import React from "react";
import { Card } from "react-bootstrap";
import "./IconDetails.css";


export default function IconDetailsCard(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.cocktail.name}</Card.Title>

                <Card.Subtitle>Ingredients</Card.Subtitle>
                <Card.Text>{props.cocktail.ingredients}</Card.Text>
                
                <Card.Subtitle>Directions</Card.Subtitle>
                <Card.Text>{props.cocktail.directions}</Card.Text>


            </Card.Body>
        </Card>
    );
}