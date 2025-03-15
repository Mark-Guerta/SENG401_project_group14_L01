class Prompt:
    def __init__(self, message: str):
        self.message = message

    def set_message(self, message: str):
        self.message = message

    def get_message(self):
        return self.message
