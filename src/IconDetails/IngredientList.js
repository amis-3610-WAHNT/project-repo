import React from "react";
import { Card } from "react-bootstrap";
import "./IconDetails.css";



export default function IngredientList(props) {
    return (
        <div className="specialCard">
            <Card border="light">
                {props.ingredients}
            </Card>
        </div>
    );
}