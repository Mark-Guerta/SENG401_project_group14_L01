from RegisteredUser import RegisteredUser

class Signup:
    def __init__(self):
        self.username = None
        self.email = None
        self.password = None

    def inputSignupCredentials(self):
        """
        Take in credentials for signup from frontend.
        """
        self.username = input("Enter username: ")
        self.email = input("Enter email: ")
        self.password = input("Enter password: ")
        return self.username, self.email, self.password

    def createRegisteredUser(self):
        """
        Creates a registered user.
        Returns: Boolean indicating if the user was created successfully.
        """
        username, email, password = self.inputSignupCredentials()
        newRegisteredUser = RegisteredUser(username, email, password)
        return newRegisteredUser is not None  # Cleaner check
