# This file is for future needs, currently not in use

class GuestUser:
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
    
    