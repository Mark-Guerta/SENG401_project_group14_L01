import mysql.connector

mydb = None

def connectDB():
    try:
        mydb = mysql.connector.connect(host='127.0.0.1', user='root', password='')
    except:
        print("Could not connect to database")

def closeDB():
    try:
        mydb.close()
    except:
        print('Either not connected to database or just could not disconnect properly')

def getDB():
    return mydb