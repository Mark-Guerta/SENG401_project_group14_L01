import pytest
from RegisteredUser import RegisteredUser

def test_initialization():
    user = RegisteredUser("test@example.com", "securepass", "testuser")
    assert user.username == "testuser"
    assert user.email == "test@example.com"
    assert user.password == "securepass"
    assert user.result == ""

def test_get_info():
    user = RegisteredUser("john@example.com", "12345", "john_doe")
    info = user.getInfo()
    assert info == {
        "username": "username",
        "email": "email",
        "password": "password"
    }

def test_set_and_get_result():
    user = RegisteredUser()
    user.setResult("Test result")
    assert user.getResult() == "Test result"

def test_set_empty_result():
    user = RegisteredUser()
    user.setResult("")
    assert user.getResult() == ""
