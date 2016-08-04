/**
 * Created by Sidney on 8/3/2016.
 */
import React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome"
        }
    }
    changeTitle(title) {
        this.setState({title}); // ES6
    //  this.setState({title: title}); // ES5
    }
    render() {
        return (
            <div>
                { /* Use .bind(this) to exec .changeTitle of this class
                     NOT of other classes (from children components) */ }
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Body />
                <Footer />
            </div>
        );
    }
}
