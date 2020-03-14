import React, { Component } from "react";
import IconDetailsDisplay from "./IconDetailsDisplay.js";

export default class IconDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [
                {
                    id: 1,
                    name: "Long Island",
                    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Sweet and Sour Mix", "Cola", "Lemon Slice"],
                    directions: "Fill a cocktail shaker with ice. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. Pour cocktail into a Collins or hurricane glass; top with splash of cola for color. Garnish with a lemon slice."
                },
            ]
        };
    }

    render() {
        return(
            <div className="IconDetail">
                <div>
                    <IconDetailsDisplay cocktails={this.state.cocktails} />
                </div>
            </div>
        );
    }
}