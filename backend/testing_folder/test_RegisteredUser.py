import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
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
        "username": "john_doe",
        "email": "john@example.com",
        "password": "12345"
    }

def test_set_and_get_result():
    user = RegisteredUser()
    user.setResult("Test result")
    assert user.getResult() == "Test result"

def test_set_empty_result():
    user = RegisteredUser()
    user.setResult("")
    assert user.getResult() == ""
