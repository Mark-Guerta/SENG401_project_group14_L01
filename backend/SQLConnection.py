from DatabaseSingleton import databaseInstance

class SQLConnect:

    def __init__(self):
        self.databaseUsernames = None
        self.databasePasswords = None
        self.database = databaseInstance.getConnection()

    def storeDatabase(self):
        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")


        cursor.execute("SELECT userName, userPassword FROM User")

        self.databaseUsernames, self.databasePasswords = cursor.fetchall()

        cursor.close()
        return

    def getDatabase(self):
        return self.databaseUsernames, self.databasePasswords
