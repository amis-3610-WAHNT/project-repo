import React from "react";
import IconCard from "./IconCard.js";
import { CardColumns } from "react-bootstrap";
import "./Icons.css";

export default function IconsDisplay(props) {
    return (
        <div className="display card-columns">
            <CardColumns>
                {props.cocktails.map(c => (
                    <IconCard cocktail={c} key={c.id}/>
                ))}
            </CardColumns>
        </div>        
    );
}