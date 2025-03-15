from User import User
from SQLConnection import SQLConnect

class RegisteredUser(User):
    def __init__(self, email = "", password = "", username = ""):
        self.username = username
        self.email = email
        self.password = password
        self.SQL = SQLConnect()
        self.SQL.inputDatabase(self.username, self.email, self.password)

    def getInfo():
        return {"username": "username", "email": "email", "password": "password"}
    
    