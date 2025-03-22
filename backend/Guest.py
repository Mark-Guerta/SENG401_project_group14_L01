import User

class Guest(User.User):
    def __init__(self):
        super().__init__()
        self.result = ""

    def getInfo(self):
        return "Guest information not available."

    def setResult(self, result):
        self.result = result

    def getResult(self):
        return self.result
