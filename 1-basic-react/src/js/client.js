import React from "react";
import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

class Layout extends React.Component {
    val1 = 'Will';

    render() {
        return (
          <h1>It's {this.val1}!</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
