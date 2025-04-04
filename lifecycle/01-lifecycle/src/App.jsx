import React, { Component } from "react";
import ProductFetcher from "./components/ProductFetcher";
// import Counter from "./components/Counter";

class App extends Component {
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError: Handling error", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch: Error caught", error, info);
  }

  render() {
    return (
      <div>
        <ProductFetcher />
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
