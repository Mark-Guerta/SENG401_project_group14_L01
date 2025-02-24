from DatabaseConnection import getDB
import mysql.connector

def loginProcess(username, password):
    # Call this function to initate a login.
    # Check credentials (call function)
    # Match a corresponding message to FALSE for failure or TRUE for success
    mydb = getDB()
    try:
        cursor = mydb.cursor()
    except:
        if(mydb == None):
            print("Database not connected")
        else:
            print("Cursor already created")


    cursor.execute("SELECT userName, userPassword FROM User")

    usernames, passwords = cursor.fetchall()

    cursor.close()

    if username not in usernames:
        return False
    
    usernameIndex = usernames.index(username)

    if passwords[usernameIndex] == password:
        return True
    else:
        return False

def checkRegisteredUserInDatabase(username):
    # Check if inputed credentials match with any users in database (return TRUE if they are)
    # If not then guest login is initated by returning FALSE
    mydb = getDB()
    try:
        cursor = mydb.cursor()
    except:
        if(mydb == None):
            print("Database not connected")
        else:
            print("Cursor already created")


    cursor.execute("SELECT userName FROM User")

    myresult = cursor.fetchall()

    cursor.close()

    if username in myresult:
        return True
    else:
        return False
 
