from SQLConnection import SQLConnect

class DatabaseSingleton():

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseSingleton, cls).__new__(cls)
        return cls._instance
    
    def __init__(self):
        self.databasePasswords = None
        self.databaseUsernames = None
        self.mydb = SQLConnect()
    
    def setLoginData(self):
        self.databaseUsernames, self.databasePasswords = self.mydb.getDatabase()

    def getLoginData(self):
        return self.databaseUsernames, self.databasePasswords

databaseInstance = DatabaseSingleton() 
  

