import React from "react";
import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

class Layout extends React.Component {
    val1 = 'Will';
    getVal(val) {
        return "Another Will " + val;
    }

    render() {
        return (
          <div>
              <h1>It's {this.val1}!</h1>
              <h1>It's {this.getVal(555)}</h1>
          </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
