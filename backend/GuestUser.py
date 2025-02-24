from User import User
from Signup import createRegisteredUser


userBase = User()

class GuestUser:
    def __init__(self, email, password):
        self.UserBase = User(email, password)
        

def createGuestUser():
    # create a guest user 
    
    return 0

def sendGuestToSignup(guestUserTransport):
    # send guest data to signup to create a registered user
    guestTransport = {}
    guestTransport["email"] = guestUserTransport.email
    guestTransport["password"] = guestUserTransport.password
    return guestTransport