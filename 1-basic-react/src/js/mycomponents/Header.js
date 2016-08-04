/**
 * Created by Sidney on 8/3/2016.
 */
import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        console.log(this.props); // Header Properties
        return (
            <Title title={this.props.title} />
        );
    }
}
