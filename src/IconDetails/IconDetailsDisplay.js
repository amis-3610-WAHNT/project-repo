import React from "react";
import IconDetailsCard from "./IconDetailsCard.js";
import { CardColumns } from "react-bootstrap";

import "./IconDetails.css";

export default function IconDetailsDisplay(props) {
    return (
        <div className="display card-columns">
            <CardColumns>
             {props.cocktails.map(c => (
                <IconDetailsCard cocktail={c} key={c.id}/>
            ))}
            </CardColumns>
        </div>        
    );
}