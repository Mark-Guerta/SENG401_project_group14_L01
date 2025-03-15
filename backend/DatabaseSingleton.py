import SQLConnection

class DatabaseSingleton():

    _instance = None

    def __new__(self):
        if (self._instance is None):
            self._instance = super(DatabaseSingleton, self).__new__(self)
            self.databasePasswords = None
            self.databaseUsernames = None
            self.mydb = SQLConnection.SQLConnect()
        return self._instance
    
    def setLoginData(self):
        self.databaseUsernames, self.databasePasswords = self.mydb.getDatabase()

    def getLoginData(self):
        return self.databaseUsernames, self.databasePasswords

