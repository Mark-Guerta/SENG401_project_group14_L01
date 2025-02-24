class User:
    def __init__(self, email = "", password = "", username = ""):
        self.username = username
        self.email = email
        self.password = password
        
def initializeUser(email, password, username):
    # create a user class 
    # return: boolean to prompting if user was created successfully or failed
    newUser = User(email, password, username)
    if (newUser != None):
        return newUser
    else:
        return None

def getInfo():
    return {"username": "username", 
            "email": "email", 
            "password": "password"}