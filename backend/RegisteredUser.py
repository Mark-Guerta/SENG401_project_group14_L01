from User import initializeUser

class RegisteredUser:
    def __init__(self, userBase = None):
        self.userBase = initializeUser(userBase)
        self.id = None

    def initializeRegisteredUser(self, userBase):
        newRisteredUser = RegisteredUser(userBase)
        if (newRisteredUser != None):
            return newRisteredUser
        else:
            return None
        
    def setID(self, id):
        self.id = id

    def getID(self):
        return self.id
    
    