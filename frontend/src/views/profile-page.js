import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './profile-page.css';
import NavBar from './nav-bar';

class Profile extends Component {
  constructor(props) {
    super(props);
    const username = localStorage.getItem("username");
    this.state = {
      username: username || '',
      email: '',
      password: '',
      newUsername: '',
      newEmail: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  componentDidMount() {
    const { username } = this.state;
    fetch("http://127.0.0.1:5000/retreive", {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        if (json.error === "Success") {
          const { email, password } = json.message;
          this.setState({ email, password });
        } else {
          this.setState({ error: 'Failed to retrieve profile' });
        }
      })
      .catch((error) => {
        this.setState({ error: 'Failed to retrieve profile: ' + error.message });
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  navigateTo = (path) => {
    window.location.href = path;
  };

  handleSubmitNewPassword = (event) => {
    event.preventDefault();
    const { username, newPassword, confirmPassword, email } = this.state;
    if (!newPassword || !confirmPassword) {
      this.setState({ error: 'Please fill in password and confirm password' });
    } else if (newPassword !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      const newUser = {
        email,
        newPassword,
        username,
      };

      fetch("http://127.0.0.1:5000/change-pass", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.error === "Password Change Successful") {
            this.setState({ error: "Password Change Successful" });
            location.reload();
          } else {
            this.setState({ error: 'Failed to change password' });
          }
        });
    }
  };

  handleSubmitNewEmail = (event) => {
    event.preventDefault();
    const { username, newEmail } = this.state;

    const newUser = {
      newEmail,
      username,
    };

    fetch("http://127.0.0.1:5000/change-email", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error === "Change Successful") {
          this.setState({ error: "Email change successful" });
          location.reload();
        } else {
          this.setState({ error: 'Failed to change email' });
        }
      });
  };

  handleSubmitDeleteAccount = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    const newUser = {
      username,
    };

    fetch("http://127.0.0.1:5000/delete-acc", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error == "Account Deletion Successful") {
          this.setState({ error: "Account Deletion Successful" });
          this.navigateTo('/home-page2');
        } else {
          this.setState({ error: 'Account Deletion Failed' });
        }
      });
  };

  render() {
    
    const { username, password, email, error, newUsername, newPassword, newEmail, confirmPassword } = this.state;

    return (
      
      <div className="profile-container">
          <NavBar />
        <div className="profile-box-container">
        <span className="profile-label">Current Username: {username}</span>
        
          <span className="profile-label">Current Email: {email}</span>
        <form onSubmit={this.handleSubmitNewEmail}>
            
            <input
              className="profile-input"
              type="email"
              placeholder="Enter your Email"
              onChange={this.handleInputChange}
              name="newEmail"
            />
            <button type="submit" className="profile-button">Change</button>
          </form>
          
        
          <form onSubmit={this.handleSubmitNewPassword}>
            <span className="profile-label">Confirm New Password:</span>
            <br></br>
            <input
              className="profile-input"
              type="password"
              placeholder="Enter your Password"
              value={confirmPassword}
              onChange={this.handleInputChange}
              name="confirmPassword"/>
            <br></br>
            <span className="profile-label">Enter New Password:</span>
            <br></br>
            <input
              className="profile-input"
              type="password"
              placeholder="Re-Enter your Password"
              value={newPassword}
              onChange={this.handleInputChange}
              name="newPassword"
            />
            <button type="submit" className="profile-button">Change</button>
          </form>

          <form onSubmit={this.handleSubmitDeleteAccount}>
        <button type="submit" className="profile-button">Delete Account</button>
          </form>

          {error && <p className="validation-message">{error}</p>}
        </div>
      </div>
     
    );

  }
}

export default Profile;
