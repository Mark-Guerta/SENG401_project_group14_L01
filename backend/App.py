from flask import Flask, request, jsonify
from flask_cors import CORS
from Signup import Signup 


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

if __name__ == '__main__':
    app.run(debug=True)
    
