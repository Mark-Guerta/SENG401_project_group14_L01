from flask import Flask, request, jsonify
from flask_cors import CORS
import Signup
import Login 
import Gemini
import DatabaseSingleton

app = Flask(__name__) 
CORS(app)
# Initialize Signup instance
signup = Signup.Signup()
databaseInstance = DatabaseSingleton.DatabaseSingleton()
databaseInstance.setLoginData()

@app.route('/register', methods=['POST'])
def register():

    email = request.json['email']
    password = request.json['password']
    username = request.json['username']

    signup.setSignupCredentials(username, email, password)
    check = signup.createRegisteredUser()
    databaseInstance.setLoginData()
    
    if check:
        return jsonify({"error": "Signup Successful"}), 500
    else:
        return jsonify({"error": "Signup Failed"}), 500

    
    


@app.route('/login', methods=['POST'])
def login():
    password = request.json['password']
    username = request.json['username']


    
    is_authenticated = Login.Login.loginProcess(username, password)

    if is_authenticated==True:
        return jsonify({'error': 'Login Successful'}), 500
    else:
        return jsonify({'error': 'Login Failed'}), 500
    
    
 #@app.route('/prepare-meal', methods=['POST'])
#def prompt():
 #   data = request.json
  #  message = Gemini.getResponse(data)
   # return jsonify({message})
       
    
if __name__ == '__main__':
    app.run(debug=True)