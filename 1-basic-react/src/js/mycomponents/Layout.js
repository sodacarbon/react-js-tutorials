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
    render() {
        setTimeout(() => {
            this.setState({ title: "Welcome Will!" })
        }, 2000);
        return (
            <div>
                <Header title={this.state.title} />
                <Header title="Other Title" />
                <Body />
                <Footer />
            </div>
        );
    }
}
