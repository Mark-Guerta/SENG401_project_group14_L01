import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest
from DatabaseSingleton import DatabaseSingleton

@pytest.fixture
def database():
    db = DatabaseSingleton()
    db.setLoginData()
    return db

def test_delete_account(database, mocker):
    mocker.patch.object(database.mydb, 'removeFromDatabase', return_value=True)
    result = database.deleteAcc('testuser')
    assert result == True
    database.mydb.removeFromDatabase.assert_called_once_with('testuser')

def test_change_email(database, mocker):
    mocker.patch.object(database.mydb, 'editDatabaseEmail', return_value=True)
    result = database.changeEmail('testuser', 'newemail@example.com')
    assert result == True
    database.mydb.editDatabaseEmail.assert_called_once_with('testuser', 'newemail@example.com')

def test_change_password(database, mocker):
    mocker.patch.object(database.mydb, 'editDatabasePass', return_value=True)
    result = database.changePass('testuser', 'testuser@example.com', 'newpassword123')
    assert result == True
    database.mydb.editDatabasePass.assert_called_once_with('testuser', 'testuser@example.com', 'newpassword123')

def test_retrieve_profile(database, mocker):
    mocker.patch.object(database.mydb, 'retrieveProfileData', return_value={'username': 'testuser', 'email': 'testuser@example.com'})
    result = database.retrieveProfile('testuser')
    assert result == {'username': 'testuser', 'email': 'testuser@example.com'}
    database.mydb.retrieveProfileData.assert_called_once_with('testuser')