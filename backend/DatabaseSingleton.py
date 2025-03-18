import SQLConnection

class DatabaseSingleton():

    _instance = None

    def __new__(self):
        if (self._instance is None):
            self._instance = super(DatabaseSingleton, self).__new__(self)
            self.databasePasswords = None
            self.databaseUsernames = None
            self.databaseEmails = None
            self.mydb = SQLConnection.SQLConnect()
        return self._instance
    
    def setLoginData(self):
        self.databaseUsernames, self.databaseEmails, self.databasePasswords = self.mydb.getDatabase()

    def getLoginData(self):
        return self.databaseUsernames, self.databasePasswords
    
    def deleteAcc(self, username):
        self.mydb.removeFromDatabase(username)

    def changeEmail(self, username, email):
        self.mydb.editDatabaseEmail(username, email)

    def changePass(self, username, email, password):
        self.mydb.editDatabasePass(username, email, password)
        
    def retrieveProfile(self, username):
        profile = self.mydb.retrieveProfile(username)
        return profile
        