from User import User

class RegisteredUser(User):
    def __init__(self, email = "", password = "", username = ""):
        self.username = username
        self.email = email
        self.password = password

    def getInfo():
        return {"username": "username", "email": "email", "password": "password"}
    
    