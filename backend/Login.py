from DatabaseSingleton import databaseInstance
# use databaseSingleton as its for only viewing
class Login:

    def __init__(self):
        # self.SQL.storeDatabase()
        # self.usernames, self.passwords = self.SQL.getDatabase()
        self.usernames, self.passwords = None

    def loginProcess(self, username, password):
        # Call this function to initate a login.
        # Check credentials (call function)
        # Match a corresponding message to FALSE for failure or TRUE for success
        databaseInstance.setLoginData()
        self.usernames, self.passwords = databaseInstance.getLoginData()

        if username not in self.usernames:
            return False
        
        usernameIndex = self.usernames.index(username)

        if self.passwords[usernameIndex] == password:
            return True
        else:
            return False

    def checkRegisteredUserInDatabase(self, username):
        # Check if inputed credentials match with any users in database (return TRUE if they are)
        # If not then guest login is initated by returning FALSE
        databaseInstance.setLoginData()
        self.usernames, self.passwords = databaseInstance.getLoginData()
        
        if username in self.usernames:
            return True
        else:
            return False
 
