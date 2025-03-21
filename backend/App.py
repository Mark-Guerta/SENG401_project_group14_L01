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

    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    signup.setSignupCredentials(username, email, password)
    check = signup.createRegisteredUser()
    databaseInstance.setLoginData()
    
    if check:
        return jsonify({"error": "Signup Successful"}), 500
    else:
        return jsonify({"error": "Signup Failed"}), 500

@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    is_authenticated = logins.loginProcess(username, password)

    if is_authenticated==True:
        return jsonify({'error': 'Login Successful'}), 500
    else:
        return jsonify({'error': 'Login Failed'}), 500
    
@app.route('/prepare-meal', methods=['POST'])
def prompt():
    requirements = []

    ingredients = request.json['ingredients']
    requirements.append(request.json['lactoseFree'])
    requirements.append(request.json['glutenFree'])
    requirements.append(request.json['vegetarian'])
    requirements.append(request.json['vegan'])
    requirements.append(request.json['halal'])
    requirements.append(request.json['kosher'])
    requirements.append(request.json['diabetic'])
    height = request.json['height']
    weight = request.json['weight']
    requirements.append(request.json['highProtein'])
    requirements.append(request.json['highCarbs'])
    requirements.append(request.json['highFats'])
    requirements.append(request.json['customPreference'])
    location = request.json['location']
    
    recipe, local = Gemini.getRecipe(location, ingredients, requirements, height, weight)
    recipeInstance.setResults(recipe)
    introRecipe, recipe, concluRecipe = Gemini.formatRecipe(recipe)
    if location:
        introLocal, local, concluLocal = Gemini.formatLocation(local)

    return recipe, local

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