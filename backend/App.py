from flask import Flask, request, jsonify
from flask_cors import CORS
from Signup import Signup 
from Login import Login   

app = Flask(__name__) 
CORS(app, origins=["http://localhost:3000"])

# Initialize Signup instance
signup = Signup()

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    

    if not data or 'username' not in data or 'password' not in data or 'email' not in data:
        return jsonify({"error": "Missing username, password, or email"}), 400

 
    signup.setSignupCredentials(data['username'], data['email'], data['password'])

    
    user_created = signup.createRegisteredUser()

    if user_created:
        return jsonify({"message": "User registered successfully", "user": data}), 201
    else:
        return jsonify({"error": "User registration failed"}), 500
    
    
    
@app.route('/login', methods=['POST'])
def login_user():
    data = request.json

    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"error": "Missing username or password"}), 400

    is_authenticated = Login.loginProcess(data['username'], data['password'])

    if is_authenticated:
        return jsonify({"message": "Login successful", "user": data['username']}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)