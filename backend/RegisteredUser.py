import User

class RegisteredUser(User.User):
    def __init__(self, email = "", password = "", username = ""):
        self.username = username
        self.email = email
        self.password = password
        self.result = ""

    def getInfo(self):
        return {
            "username": self.username,
            "email": self.email,
            "password": self.password
        }
    
    def setResult(self, result):
        self.result = result

    def getResult(self):
        return self.result
    