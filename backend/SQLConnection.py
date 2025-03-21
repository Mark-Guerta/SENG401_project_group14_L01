import mysql.connector
import DatabaseSingleton

class SQLConnect:

    def __init__(self):
        self.database = None
        self.databaseInstance = DatabaseSingleton.DatabaseSingleton()

    def connectDB(self):
        try:
            self.database = mysql.connector.connect(host='127.0.0.1', user='root', password='Spookygoat32!', database="LoginDB")
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

        cursor.execute("SELECT userName, userEmail, userPassword FROM User")
        results = cursor.fetchall()
        databaseUsernames = [row[0] for row in results]
        databaseEmails = [row[1] for row in results]
        databasePasswords = [row[2] for row in results]
        cursor.close()
        self.closeDB()

        return databaseUsernames, databaseEmails, databasePasswords
    
    def inputDatabase(self, username, email, password):

        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        usernames = self.databaseInstance.getLoginData()

        if username in usernames:
            cursor.close()
            self.closeDB()
            return print("Username already in use")

        cursor.execute("INSERT INTO User (userName, userEmail, userPassword) VALUES (%s, %s, %s)", (username, email, password))
        self.database.commit()

        cursor.close()
        self.closeDB()

    def removeFromDatabase(self, username):

        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        try:
            cursor.execute("DELETE FROM User WHERE userName = %s", (username,))
            self.database.commit()
        except:
            print("ERROR: NO ACCOUNT FOUND")

        cursor.close()
        self.closeDB()

    def editDatabasePass(self, username, email, password):
        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        try:
            cursor.execute("UPDATE User SET userPassword = %s WHERE userName = %s AND userEmail = %s ", (password, username, email))
            self.database.commit()
        except:
            print("ERROR: NO ACCOUNT FOUND")

        cursor.close()
        self.closeDB()

    def editDatabaseEmail(self, username, email):
        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if(self.database == None):
                print("Database not connected")
            else:
                print("Cursor already created")

        try:
            cursor.execute("UPDATE User SET userEmail = %s WHERE userName = %s", (email, username))
            self.database.commit()
        except:
            print("ERROR: NO ACCOUNT FOUND")

        cursor.close()
        self.closeDB()
        
    def retrieveProfileData(self, username):
        self.connectDB()

        try:
            cursor = self.database.cursor()
        except:
            if self.database is None:
                print("Database not connected")
            else:
                print("Cursor already created")

        try:
            cursor.execute("SELECT userEmail, userPassword FROM User WHERE userName = %s", (username,))
            result = cursor.fetchall()
            profile = {
                "username": username,
                "email":  [row[0] for row in result],
                "password":  [row[1] for row in result]
            }
        except:
            print("ERROR: NO ACCOUNT FOUND")
            profile = None

        cursor.close()
        self.closeDB()

        return profile
