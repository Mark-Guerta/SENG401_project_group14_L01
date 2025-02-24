from User import User
from User import inputCredentials
from Signup import createRegisteredUser


userBase = User()

class GuestUser:
    def __init__(self, email, password):
        self.UserBase = User(email, password)
        

def createGuestUser(email, password): # used by guest login to create guest user
    # GuestUser constructor
    newGuest = GuestUser(email, password)
    return newGuest



def sendGuestToSignup(guestUserTransport):
    # send guest data to signup to create a registered user
    
    guestTransport = {}
    guestTransport["email"] = guestUserTransport.email
    guestTransport["password"] = guestUserTransport.password
    return guestTransport