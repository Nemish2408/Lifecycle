import React, { Component } from "react";
import UserProfile from "./components/UserProfile";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeContext } from "./components/ThemeComponent";
import "./assets/style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: "light" };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      const newTheme = prevState.theme === "light" ? "dark" : "light";
      document.body.className = newTheme; // Better way to handle theme
      return { theme: newTheme };
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className={`app-container ${this.state.theme}`}>
          <h1>React Lifecycle Dashboard</h1>
          
          <button onClick={this.toggleTheme} className="theme-button">
            {this.state.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>
          
          <ErrorBoundary>
            <UserProfile />
          </ErrorBoundary>
          
          <footer className="dashboard-footer">
            <p>Check the console to see lifecycle methods in action!</p>
          </footer>
        </div>
      </ThemeContext.Provider>
    );
  }
}