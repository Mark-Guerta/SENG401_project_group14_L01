from flask import Flask, request, jsonify
from flask_cors import CORS
import Signup, Login, Gemini, FoodApp, DatabaseSingleton

app = Flask(__name__) 
CORS(app)
# Initialize Signup instance
signup = Signup.Signup()
logins = Login.Login()
databaseInstance = DatabaseSingleton.DatabaseSingleton()
databaseInstance.setLoginData()
recipeInstance = FoodApp.FoodApp()

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

    is_authenticated = logins.loginProcess(username, password)

    if is_authenticated==True:
        return jsonify({'error': 'Login Successful'}), 500
    else:
        return jsonify({'error': 'Login Failed'}), 500
    
@app.route('/prepare-meal', methods=['POST'])
def prompt():

    requirements = []
    requirements[0] = request.json['location']
    requirements[1] = request.json['location']
    requirements[2] = request.json['location']
    requirements[3] = request.json['location']
    requirements[4] = request.json['location']
    requirements[5] = request.json['location']
    requirements[6] = request.json['location']
    requirements[7] = request.json['location']
    requirements[8] = request.json['location']
    requirements[9] = request.json['location']
    location = request.json['location']
    ingredients = request.json['ingredients']
    message = Gemini.getRecipe(location, ingredients)
    recipeInstance.setResults(message)

    return jsonify({"error": "Generation Successful", "message": message})

@app.route('/change-pass', methods=['POST'])
def switchPassword():
    #Need email and username
    email = request.json['email']
    email = email[0]
    password = request.json['newPassword']
    username = request.json['username']
    check = databaseInstance.changePass(username, email, password)
    databaseInstance.setLoginData()
    if check==True:
        return jsonify({'error': 'Password Change Successful'}), 500
    else:
        return jsonify({'error': 'Password Change Failed'}), 500

@app.route('/change-email', methods=['POST'])
def switchEmail():
    #Need to be signed in to change
    email = request.json['newEmail']
    username = request.json['username']

    check = databaseInstance.changeEmail(username, email)
    databaseInstance.setLoginData()
    if check==True:
        return jsonify({'error': 'Change Successful'}), 500
    else:
        return jsonify({'error': 'Failed to change email'}), 500

@app.route('/delete-acc', methods=['POST'])
def deleteAccount():
    #Need to be signed in to delete
    username = request.json['username']

    check = databaseInstance.deleteAcc(username)
    databaseInstance.setLoginData()
    if check==True:
        return jsonify({'error': 'Account Deletion Successful'}), 500
    else:
        return jsonify({'error': 'Account Deletion Failed'}), 500
    
@app.route('/retreive', methods=['POST'])
def RetrieveData():
    
    username = request.json['username']
    profile = databaseInstance.retrieveProfile(username)
    
    return jsonify({"error": "Success", "message": profile})

@app.route('/results', methods=['POST'])
def downloadRecipe():
    recipeInstance.downloadResults()
    return


if __name__ == '__main__':
    app.run(debug=True)