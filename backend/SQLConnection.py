from DatabaseSingleton import databaseInstance
import mysql.connector

class SQLConnect:

    def __init__(self):
        self.database = None

    def connectDB(self):
        try:
            self.database = mysql.connector.connect(host='127.0.0.1', user='root', password='')
        except:
            print("Could not connect to database")

    def closeDB(self):
        try:
            self.database.close()
        except:
            print('Either not connected to database or just could not disconnect properly')

    def getDatabase(self):
        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        cursor.execute("SELECT userName, userPassword FROM User")
        databaseUsernames, databasePasswords = cursor.fetchall()
        cursor.close()

        return databaseUsernames, databasePasswords
    
    def inputDatabase(self, username, email, password):
        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        usernames, passwords = databaseInstance.getLoginData()

        if username in usernames:
            cursor.close()
            return print("Username already in use")

        cursor.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", (username, email, password))

        databaseInstance.setLoginData()

        cursor.close()
