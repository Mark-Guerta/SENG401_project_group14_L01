from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows all domains Or to allow specific origins:
CORS(app, origins=["http://localhost:3000"])

if __name__ == '__main__':
    app.run(debug=True)