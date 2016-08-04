/**
 * Created by Sidney on 8/3/2016.
 */
import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        console.log(this.props); // Header Properties
        return (
            <div>
                <Title title={this.props.title} />
                <input onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
