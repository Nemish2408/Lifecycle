import React, { Component } from "react";

class ProductFetcher extends Component {
  static contextType = React.createContext();
  static defaultProps = {
    message: "Default Product List"
  };

  constructor(props) {
    super(props);
    console.log("Constructor: Initializing ProductFetcher component", props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Updating state from props", props, state);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: Fetching data from API");
    setTimeout(() => {      
      fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ products: data, loading: false });
          })
          .catch(() => console.log("ERROR OCURRE  D")
          )
    }, 5000);  
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Checking if ProductFetcher should update", nextProps, nextState);
    
    console.log(nextState.products !== this.state.products ||
      nextState.loading !== this.state.loading ||
      nextProps.message !== this.props.message);
    
    return (
      nextState.products !== this.state.products ||
      nextState.loading !== this.state.loading ||
      nextProps.message !== this.props.message
    );
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing snapshot", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Cleaning up ProductFetcher component",);
  }

  render() {
    console.log("Render: Rendering ProductFetcher component");
    return (
      <div>
        <h1>{this.props.message}</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.state.products.map((product) => (
              <li key={product.id}>{product.title} <img src={product.image} alt={product.title} width={"150px"} /></li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ProductFetcher;