import React, { Component } from "react";
import IconsDisplay from "./IconsDisplay.js";

export default class Icons extends Component {
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
                {
                    id: 2,
                    name: "Long Island",
                    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Sweet and Sour Mix", "Cola", "Lemon Slice"],
                    directions: "Fill a cocktail shaker with ice. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. Pour cocktail into a Collins or hurricane glass; top with splash of cola for color. Garnish with a lemon slice."
                },
                {
                    id: 3,
                    name: "Long Island",
                    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Sweet and Sour Mix", "Cola", "Lemon Slice"],
                    directions: "Fill a cocktail shaker with ice. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. Pour cocktail into a Collins or hurricane glass; top with splash of cola for color. Garnish with a lemon slice."
                },
                {
                    id: 4,
                    name: "Long Island",
                    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Sweet and Sour Mix", "Cola", "Lemon Slice"],
                    directions: "Fill a cocktail shaker with ice. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. Pour cocktail into a Collins or hurricane glass; top with splash of cola for color. Garnish with a lemon slice."
                },
                {
                    id: 5,
                    name: "Long Island",
                    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Sweet and Sour Mix", "Cola", "Lemon Slice"],
                    directions: "Fill a cocktail shaker with ice. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. Pour cocktail into a Collins or hurricane glass; top with splash of cola for color. Garnish with a lemon slice."
                }
            ]
        };
    }

    render() {
        return(
            <div className="Icons">
                <div>
                    <IconsDisplay cocktails={this.state.cocktails} />
                </div>
            </div>
        );
    }
}