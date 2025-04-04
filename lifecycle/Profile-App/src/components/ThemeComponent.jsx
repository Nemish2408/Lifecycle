import React, { createContext } from "react";

// Create Theme Context with default value
export const ThemeContext = createContext("light");

// Create Theme Provider component
export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: this.toggleTheme
    };
  }
  
  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "light" ? "dark" : "light"
    }));
  }
  
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// Create a Theme Consumer component
export class ThemeConsumer extends React.Component {
  static contextType = ThemeContext;
  
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className={`theme-consumer ${theme}`}>
            <h3>Current Theme: {theme} Mode</h3>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}