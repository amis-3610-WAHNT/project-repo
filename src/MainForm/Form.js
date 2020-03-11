import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";

export default function Form() {
    return (
        <form class="border border-dark p-0">
            <div class="form-group formTitle bold">
                <label>Let's Make Something...</label>
            </div>
            <div class="form-group inputPadding">
                <label>What do you have?</label>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="placeholderId" name="ingredient"></input>
            </div>
            <button type="submit" class="btn btn-primary btn-dark col-11">What can I make with these things? </button>
        </form>
    );
}