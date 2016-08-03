/**
 * Created by Sidney on 8/3/2016.
 */
import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Will";
        console.log("Inside class Layout");
    }

    render() {
        return (
            <div>
                <h1>It's {this.name}!</h1>
                <h2>export "default" class... is critical!</h2>
            </div>
        );
    }
}
