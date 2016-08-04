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
            name: "Will",
        }
    }
    render() {
        setTimeout(() => {
            this.setState({name: "Bob"});
        }, 1000);
        return (
            <div>
                this.state.name = {this.state.name} <!-- <span /> -->
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
