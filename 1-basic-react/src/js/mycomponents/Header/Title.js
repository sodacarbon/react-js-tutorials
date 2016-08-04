/**
 * Created by Sidney on 8/4/2016.
 */
import React from "react";


export default class Title extends React.Component {
    render() {
        console.log(this.props); // Title Properties
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
