import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";

export default function Form() {
    return (
        <form className="border border-dark p-0">
            <div className="form-group formTitle bold">
                <label>Let's Make Something...</label>
            </div>
            <div className="form-group inputPadding">
                <label>What do you have?</label>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="placeholderId" name="ingredient"></input>
            </div>
            <button type="submit" className="btn btn-primary btn-dark col-11">What can I make with these things? </button>
        </form>
    );
}