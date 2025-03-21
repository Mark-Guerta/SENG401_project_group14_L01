import pytest
from Signup import Signup
from RegisteredUser import RegisteredUser

class MockSQLConnection:
    def __init__(self):
        self.data = []

    def inputDatabase(self, username, email, password):
        self.data.append((username, email, password))

@pytest.fixture
def signup():
    Signup.SQL = MockSQLConnection()  # Mocking database connection
    return Signup()

def test_setSignupCredentials(signup):
    signup.setSignupCredentials("user123", "user123@example.com", "password123")
    assert signup.getSignupCredentials() == ("user123", "user123@example.com", "password123")

def test_createRegisteredUser(signup):
    signup.setSignupCredentials("user123", "user123@example.com", "password123")
    result = signup.createRegisteredUser()
    assert result == True
    assert isinstance(Signup.SQL.data[0], tuple)
    assert Signup.SQL.data[0] == ("user123", "user123@example.com", "password123")

def test_transportUserCredentialsIntoDatabase(signup):
    signup.setSignupCredentials("user123", "user123@example.com", "password123")
    signup.transportUserCredentialsIntoDatabase()
    assert len(Signup.SQL.data) == 1
    assert Signup.SQL.data[0] == ("user123", "user123@example.com", "password123")
