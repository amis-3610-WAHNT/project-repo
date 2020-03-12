import React from "react";
import { Card } from "react-bootstrap";
    
export default function IconsCard(props) {
    return (
            <Card>
                <Card.Body>
                    <Card.Title>{props.cocktail.name}</Card.Title>
                    <Card.Text>{props.cocktail.directions}</Card.Text>
                </Card.Body>
            </Card>
    );
}