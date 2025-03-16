import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      error: '' 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = this.state;
    if (!username || !password || !confirmPassword || !email) {
      this.setState({ error: 'Please fill in all fields' });
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {

      const newUser = {
        username,
        password,
        email
      };
     
      fetch("http://127.0.0.1:5000/register", {
       
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.error) {
            this.setState({ error: json.error });
          } else {
            this.setState({ error: '' });
        
          }
        });
      }
    
    }
  render() {
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '200px'
    };

    return (

      <div>
    
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit} style={formStyle} method = "POST">
          {this.state.error && <div>{this.state.error}</div>} {/* Display error message */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Sign up</button>
          <button type="button" onClick={this.props.onSwitchToLogin}>Switch to Login</button>
        </form>

      </div>
    );
  }
}

export default Register;