import React, { Component } from "react";
import { fetchUserData } from "../services/api";
import { ThemeContext } from "./ThemeComponent";

class UserProfile extends Component {
  static contextType = ThemeContext;
  
  constructor(props) {
    super(props);
    console.log("Constructor: Initializing component");
    this.state = {
      user: null,
      loading: true,
      error: null,
      updateCount: 0
    };
    this.abortController = new AbortController();
  }
  
  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps: Props received", props);
    // We could update state based on props here if needed
    return null;
  }
  
  componentDidMount() {
    console.log("ComponentDidMount: Component mounted, fetching data");
    setTimeout(() => {
      fetchUserData()
        .then(user => this.setState({ user, loading: false }))
        .catch(error => this.setState({ error, loading: false }));
    }, 3000);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding whether to update");
    // Only update if loading state changes or user data changes
    if (this.state.loading !== nextState.loading) return true;
    if (this.state.error !== nextState.error) return true;
    if (this.state.user !== nextState.user) return true;
    if (this.state.updateCount !== nextState.updateCount) return true;
    return false;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Getting snapshot before DOM updates");
    // Return information to be passed to componentDidUpdate
    if (prevState.user !== this.state.user) {
      return { prevUser: prevState.user };
    }
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated", { prevState, currentState: this.state });
    if (snapshot && snapshot.prevUser) {
      console.log("User data changed from:", snapshot.prevUser, "to:", this.state.user);
    }
  }
  
  componentWillUnmount() {
    console.log("componentWillUnmount: Cleaning up");
    // Cancel any pending API requests
    this.abortController.abort();
  }
  
  updateProfile = () => {
    this.setState({ loading: true });
    fetchUserData()
      .then(user => this.setState({ 
        user, 
        loading: false, 
        updateCount: this.state.updateCount + 1 
      }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    console.log("Render: Rendering component");
    const { user, loading, error } = this.state;
    const theme = this.context;
    
    return (
      <div className={`profile-container ${theme}`}>
        <h2>User Profile Dashboard</h2>
        
        {loading && <p className="loading-text">Loading user data...</p>}
        
        {error && (
          <div className="error-text">
            <p>Error: {error.message}</p>
            <button onClick={this.updateProfile}>Try Again</button>
          </div>
        )}
        
        {user && !loading && (
          <div className="user-card">
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`} 
              className="user-image"
            />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
            {user.location && (
              <p>Location: {user.location.city}, {user.location.country}</p>
            )}
            <button onClick={this.updateProfile} className="update-button">
              Update Profile
            </button>
          </div>
        )}
        
        <p className="lifecycle-info">Profile updates: {this.state.updateCount}</p>
      </div>
    );
  }
}

export default UserProfile;