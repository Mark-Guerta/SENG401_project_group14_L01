from User import initializeUser

def createRegisteredUser():
    # create a registered user 
    # return: boolean to prompting if user was created successfully or failed
    (username, email, password) = inputSignupCredentials()
    newRegisteredUser = initializeUser(username, email, password)
    if (newRegisteredUser != None):
        return True
    else:
        return False
        
def inputSignupCredentials():
    # take in credentials for signup from frontend 
    # TODO: recieve credentials from frontend
    username = ""
    email = ""
    password = ""
    return (username, email, password)

