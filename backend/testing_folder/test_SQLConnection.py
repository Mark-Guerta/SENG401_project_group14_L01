import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import unittest
from unittest.mock import MagicMock, patch
import mysql.connector
from SQLConnection import SQLConnect

class TestSQLConnection(unittest.TestCase):

    @patch('mysql.connector.connect')
    def test_connectDB_success(self, mock_connect):
        sql = SQLConnect()
        sql.connectDB()
        mock_connect.assert_called_once_with(host='127.0.0.1', user='root', password='Spookygoat32!', database='LoginDB')

    @patch('mysql.connector.connect')
    def test_closeDB_success(self, mock_connect):
        mock_db = mock_connect.return_value
        sql = SQLConnect()
        sql.database = mock_db
        sql.closeDB()
        mock_db.close.assert_called_once()

    @patch('mysql.connector.connect')
    def test_getDatabase(self, mock_connect):
        mock_db = mock_connect.return_value
        mock_cursor = mock_db.cursor.return_value
        mock_cursor.fetchall.return_value = [('user1', 'user1@example.com', 'pass1')]
        
        sql = SQLConnect()
        result = sql.getDatabase()
        self.assertEqual(result, (['user1'], ['user1@example.com'], ['pass1']))
        mock_cursor.execute.assert_called_once_with("SELECT userName, userEmail, userPassword FROM User")

    @patch('mysql.connector.connect')
    def test_inputDatabase(self, mock_connect):
        mock_db = mock_connect.return_value
        mock_cursor = mock_db.cursor.return_value

        sql = SQLConnect()
        sql.databaseInstance.getLoginData = MagicMock(return_value=(['existingUser'], ['existingPass']))
        
        # Test inserting a new user
        sql.inputDatabase('newUser', 'newuser@example.com', 'newpass')
        mock_cursor.execute.assert_called_once_with(
            "INSERT INTO User (userName, userEmail, userPassword) VALUES (%s, %s, %s)",
            ('newUser', 'newuser@example.com', 'newpass')
        )

    @patch('mysql.connector.connect')
    def test_removeFromDatabase(self, mock_connect):
        mock_db = mock_connect.return_value
        mock_cursor = mock_db.cursor.return_value

        sql = SQLConnect()
        sql.removeFromDatabase('user1')
        mock_cursor.execute.assert_called_once_with(
            "DELETE FROM User WHERE userName = %s", ('user1',)
        )

if __name__ == '__main__':
    unittest.main()