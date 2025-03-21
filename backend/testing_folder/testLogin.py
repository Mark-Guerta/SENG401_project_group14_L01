import pytest
from unittest.mock import MagicMock
import Login

@pytest.fixture
def login():
    login_instance = Login.Login()
    login_instance.databaseInstance = MagicMock()
    return login_instance

def test_initialization(login):
    assert login.usernames is None
    assert login.passwords is None
    assert login.databaseInstance is not None

def test_valid_login(login):
    login.databaseInstance.getLoginData.return_value = (["user1"], ["password123"])
    login.databaseInstance.setLoginData = MagicMock()

    assert login.loginProcess("user1", "password123") is True

def test_invalid_password(login):
    login.databaseInstance.getLoginData.return_value = (["user1"], ["password123"])
    login.databaseInstance.setLoginData = MagicMock()

    assert login.loginProcess("user1", "wrongpassword") is False

def test_non_existent_username(login):
    login.databaseInstance.getLoginData.return_value = (["user1"], ["password123"])
    login.databaseInstance.setLoginData = MagicMock()

    assert login.loginProcess("user2", "password123") is False

def test_check_registered_user_exists(login):
    login.databaseInstance.getLoginData.return_value = (["user1"], ["password123"])
    login.databaseInstance.setLoginData = MagicMock()

    assert login.checkRegisteredUserInDatabase("user1") is True

def test_check_registered_user_not_exists(login):
    login.databaseInstance.getLoginData.return_value = (["user1"], ["password123"])
    login.databaseInstance.setLoginData = MagicMock()

    assert login.checkRegisteredUserInDatabase("user2") is False
