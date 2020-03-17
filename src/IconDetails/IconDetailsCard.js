import React from "react";
import { Card, CardGroup } from "react-bootstrap";


export default function IconDetailsCard(props) {
    return (
        <Card border="light">
            <Card.Body>
                <Card.Title>{props.cocktail.name}</Card.Title>

                <Card.Subtitle>Ingredients</Card.Subtitle>
                <CardGroup>
                    <Card border="light" style={{margin: "10px", padding: "10px"}}>This</Card>
                    <Card border="light" style={{margin: "10px", padding: "10px"}}>is</Card>
                    <Card border="light" style={{margin: "10px", padding: "10px"}}>hardcoded</Card>
                </CardGroup>
                <Card.Text>{props.cocktail.ingredients}</Card.Text>
                
                <Card.Subtitle>Directions</Card.Subtitle>
                <Card.Text>{props.cocktail.directions}</Card.Text>


            </Card.Body>
        </Card>
    );
}