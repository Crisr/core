import React, { Component } from "react";
import Auction from "./Components/Auction";
import Store from "./Store/1830store";

class App extends Component {
  render() {
    return (
      <div>
        <Auction Store1830={Store} />
      </div>
    );
  }
}

export default App;
