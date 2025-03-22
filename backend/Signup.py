import RegisteredUser
import SQLConnection

class Signup:
    
    SQL = SQLConnection.SQLConnect()
    
    def __init__(self):
        self.username = None
        self.email = None
        self.password = None

    def setSignupCredentials(self, username, email, password):
        """
        Take in credentials for signup from frontend.
        """
        self.username = username
        self.email = email
        self.password = password
    
    def getSignupCredentials(self):
        return self.username, self.email, self.password

    def createRegisteredUser(self):
        """
        Creates a registered user.
        Returns: Boolean indicating if the user was created successfully.
        """
        username, email, password = self.getSignupCredentials()
        newRegisteredUser = RegisteredUser.RegisteredUser(username, email, password)
        check = self.transportUserCredentialsIntoDatabase()
        return check  # Cleaner check
    
    def transportUserCredentialsIntoDatabase(self):
        check = self.SQL.inputDatabase(self.username, self.email, self.password)
        return check
        
        
        
        
        
    
