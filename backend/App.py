from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__) 
CORS(app, origins=["http://localhost:3000"])

if __name__ == '__main__':
    app.run(debug=True)


def get_info():
    return jsonify({"message": "Register endpoint is working!"})

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"error": "Missing username or password"}), 400
    
   
    return jsonify({"message": "User registered successfully", "user": data}), 201


if __name__ == '__main__':
    app.run(debug=True)