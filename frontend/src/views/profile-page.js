import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './profile-page.css';

class Profile extends Component {
    
    
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password:'',


      newUsername:'',
      newEmail:'',
      newPassword:'',
      confirmpassword: ''
    };
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({ username });
    }
    console.log(this.state.username)

   
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
  }

  navigateTo = (path) => {
    window.location.href = path;
  };


  handleSubmitNewPassword = (event) => {
    event.preventDefault();
    const { username, newPassword, confirmPassword,} = this.state;
    if (!username || !newPassword || !confirmPassword || !email) {
      this.setState({ error: 'Please fill in all fields' });
    } else if (newPassword !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        newPassword,
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
          
          if (json.error=="Signup Successful") {
            this.setState({"error": "Signup Successful"});
            this.navigateTo('/home-page2');
          } else {
            this.setState({error: 'Failed'}); 
          }
        });
    }
  }


  handleSubmitNewEmail = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword,} = this.state;
    if (!username || !password || !confirmPassword || !email) {
      this.setState({ error: 'Please fill in all fields' });
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
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
          
          if (json.error=="Signup Successful") {
            this.setState({"error": "Signup Successful"});
            this.navigateTo('/home-page2');
          } else {
            this.setState({error: 'Failed'}); 
          }
        });
    }
  }



  handleSubmitDeleteAccount = (event) => {
    event.preventDefault();
    const { username, password, confirmPassword,} = this.state;
    if (!username || !password || !confirmPassword || !email) {
      this.setState({ error: 'Please fill in all fields' });
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
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
          
          if (json.error=="Signup Successful") {
            this.setState({"error": "Signup Successful"});
            this.navigateTo('/home-page2');
          } else {
            this.setState({error: 'Failed'}); 
          }
        });
    }
  }


  

  render() {
    const { username, password, email, confirmPassword, error , newUsername, newPassword, newEmail} = this.state;

    return (
      <div className="register-container">
        <Helmet>
          <title>White Soup</title>
        </Helmet>

        <div className="register-register">
        
          <div className="register-bottom-bar">
            <span className="register-text10">
              <span>Email:</span>
              <br></br>
              <span>white.dressing@coomer.com</span>
              <br></br>
              <br></br>
              <span>Phone number:</span>
              <br></br>
              <span>403-1111-2222</span>
            </span>
            <span className="register-text19">Contacts</span>
            <span className="register-text20">Account</span>
            <span className="register-text21">
              <span>Forgot Password</span>
              <br></br>
              <br></br>
              <span>Frequently Asked Questions</span>
              <br></br>
              <br></br>
              <span>Sign up</span>
              <br></br>
              <br></br>
              <span>Support</span>
            </span>
            <div className="register-company-logo1">
              <img
                src="/external/imageremovebgpreview1i192-cbkc-400h.png"
                alt="imageremovebgpreview1I192"
                className="register-imageremovebgpreview11"
              />
            </div>
            <img
              src="/external/socialmedialogo1927-63ch-200h.png"
              alt="SocialMediaLogo1927"
              className="register-social-media-logo"
            />
            <span className="register-text32">
              @WhiteDressing Privacy Policy AI Agreement Terms and Conditions
            </span>
          </div>
          <div className="register-design">
            <img
              src="/external/ellipse91927-1qqs-1600h.png"
              alt="Ellipse91927"
              className="register-ellipse9"
            />
            <img
              src="/external/ellipse11927-g8dm-1500h.png"
              alt="Ellipse11927"
              className="register-ellipse1"
            />
            <img
              src="/external/ellipse21927-eyxe-700h.png"
              alt="Ellipse21927"
              className="register-ellipse2"
            />
            <img
              src="/external/ellipse31927-v3tq-300h.png"
              alt="Ellipse31927"
              className="register-ellipse3"
            />
            <img
              src="/external/ellipse41928-0i7m-200h.png"
              alt="Ellipse41928"
              className="register-ellipse4"
            />
            <img
              src="/external/ellipse71928-dcyp-200h.png"
              alt="Ellipse71928"
              className="register-ellipse7"
            />
            <img
              src="/external/ellipse61928-ubzc-200h.png"
              alt="Ellipse61928"
              className="register-ellipse6"
            />
          </div>

          <div className="register-design">
            <img
              src="/external/ellipse91927-1qqs-1600h.png"
              alt="Ellipse91927"
              className="register-ellipse9"
            />
            <img
              src="/external/ellipse11927-g8dm-1500h.png"
              alt="Ellipse11927"
              className="register-ellipse1"
            />
            <img
              src="/external/ellipse21927-eyxe-700h.png"
              alt="Ellipse21927"
              className="register-ellipse2"
            />
            <img
              src="/external/ellipse31927-v3tq-300h.png"
              alt="Ellipse31927"
              className="register-ellipse3"
            />
            <img
              src="/external/ellipse41928-0i7m-200h.png"
              alt="Ellipse41928"
              className="register-ellipse4"
            />
            <img
              src="/external/ellipse71928-dcyp-200h.png"
              alt="Ellipse71928"
              className="register-ellipse7"
            />
            <img
              src="/external/ellipse61928-ubzc-200h.png"
              alt="Ellipse61928"
              className="register-ellipse6"
            />
          </div>

          <div>
            <form onSubmit={this.handleSubmitNewPassword}>
              <span className="ConfirmPass">Confirm New Password:</span>
              <input
                className="PasswordInputX"
                type="password"
                placeholder="Enter your Password"
                value={confirmPassword}
                onChange={this.handleInputChange}
                name="confirmPassword"
              />
              <span className="EnterPass">Enter New Password:</span>
              <input
                className="PasswordInputY"
                type="password"
                placeholder="Re-Enter your Password"
                value={newPassword}
                onChange={this.handleInputChange}
                name="password"
              />


            <button type="submit" className= "Change"> 
            <img
                className="ChangePassword"
                src="/external/signup5843-xcv-200h.png"
                alt="SignUp5843"
               
                />
                <span className = "ChangeText">Change</span>   
            </button>
            </form>

            <form onSubmit={this.handleSubmitNewEmail}>
              <span className="EnterEmail">Current Email: {email}</span>
              <input
                className="regEmail"
                type="email"
                placeholder="Enter your Email"
                value={newEmail}
                onChange={this.handleInputChange}
                name="email"
              />



            <button type="submit" className= "ChangeEmail"> 
            <img
                className="ChangePassword"
                src="/external/signup5843-xcv-200h.png"
                alt="SignUp5843"
               
                />
                <span className = "ChangeText">Change</span>   
            </button>   
            </form>

           
              <span className="EnterUsername">Current Username: {username}</span>
              <input
                className="regUsername"
                type="text"
                placeholder="Enter your Username"
                value={newUsername}
                onChange={this.handleInputChange}
                name="username"
              />

    
        

            <form >
                <button type="submit" className= "Delete"> 
                <img
                    className="DeleteImg"
                    src="/external/signup5843-xcv-200h.png"
                    alt="SignUp5843"/>
                    <span className = "ChangeTextL"> Delete Account</span>   
                </button>
            </form>
          </div>
          {error && <p className="validation-message">{error}</p>}

         
          




          <div className="register-didyouknow">
            <span className="register-text38">Did you know?</span>
            <span className="register-text39">
              There are over 7,000 types of apples grown worldwide, with varieties ranging from sweet to tart, 
              and some even developed for specific uses like baking or cider-making!
              Apples are one of the most diverse fruits globally, 
              and each region has its own unique varieties.
            </span>
          </div>
          <img
            src="/external/lprocessed15855-azr-500h.png"
            alt="lprocessed15855"
            className="register-lprocessed1"
          />

          <div className="prepare-meal-navigation-bar">
            <img
              src="/external/rectangle14318-6o78-200h.png"
              alt="Rectangle14318"
              className="prepare-meal-rectangle1"
            />
            <div className="prepare-meal-prepare-meal-button" onClick={() => this.navigateTo('/prepare-meal')}>
              <div className="prepare-meal-company-logo2">
                <img
                  src="/external/imageremovebgpreview1i431-euj-200h.png"
                  alt="imageremovebgpreview1I431"
                  className="prepare-meal-imageremovebgpreview12"
                />
                <span className="prepare-meal-text35">White Dressing</span>
              </div>
              <img
                src="/external/preparemeal4319-9bg-200h.png"
                alt="PrepareMeal4319"
                className="prepare-meal-prepare-meal2"
              />
              <span className="prepare-meal-text36">Prepare Meal</span>
            </div>
            <div className="prepare-meal-signup-button1" onClick={() => this.navigateTo('/')}>
              <img
                src="/external/signup4319-puua-200h.png"
                alt="SignUp4319"
                className="prepare-meal-sign-up1"
              />
              <span className="prepare-meal-text37">Sign out</span>
            </div>
            <div className="prepare-meal-signup-button2" onClick={() => this.navigateTo('/')}>
              <img
                src="/external/signup6030-uw0j-200h.png"
                alt="SignUp6030"
                className="prepare-meal-sign-up2"
              />
              <span className="prepare-meal-text38">Sign out</span>
            </div>
            <div className="prepare-meal-home-button" onClick={() => this.navigateTo('/home-page2')}>
              <img
                src="/external/home4320-bkcg-200h.png"
                alt="Home4320"
                className="prepare-meal-home"
              />
              <span className="prepare-meal-text39">Home</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
