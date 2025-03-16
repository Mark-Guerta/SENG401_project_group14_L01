import mysql.connector
import DatabaseSingleton

class SQLConnect:

    def __init__(self):
        self.database = None
        self.databaseInstance = DatabaseSingleton.DatabaseSingleton()

    def connectDB(self):
        try:
            self.database = mysql.connector.connect(host='127.0.0.1', user='root', password='', database="LoginDB")
        except:
            print("Could not connect to database")

    def closeDB(self):
        try:
            self.database.close()
        except:
            print('Either not connected to database or just could not disconnect properly')

    def getDatabase(self):

        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        cursor.execute("SELECT userName, userPassword FROM User")
        results = cursor.fetchall()
        databaseUsernames = [row[0] for row in results]
        databasePasswords = [row[1] for row in results]
        cursor.close()

        self.closeDB()

        return databaseUsernames, databasePasswords
    
    def inputDatabase(self, username, email, password):

        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        usernames, passwords = self.databaseInstance.getLoginData()

        if username in usernames:
            cursor.close()
            self.closeDB()
            return print("Username already in use")

        cursor.execute("INSERT INTO User (userName, userEmail, userPassword) VALUES (%s, %s, %s)", (username, email, password))

        cursor.close()

        self.closeDB()

