/**
 * Created by Sidney on 8/3/2016.
 */
import React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        const title1 = "Welcome Willl!";
        return (
            <div>
                <Header title={title1} />
                <Header title="Other Title" />
                <Body />
                <Footer />
            </div>
        );
    }
}
