from User import User
from SQLConnection import SQLConnect

class RegisteredUser(User):
    def __init__(self, email = "", password = "", username = ""):
        self.username = username
        self.email = email
        self.password = password
        self.result = ""
        self.SQL = SQLConnect()
        self.SQL.connectDB()
        self.SQL.inputDatabase(self.username, self.email, self.password)
        self.SQL.closeDB()

    def getInfo():
        return {"username": "username", "email": "email", "password": "password"}
    
    def setResult(self, result):
        self.result = result
    # function to set the user's result after entering prompt

    def getResult(self):
        return self.result
    