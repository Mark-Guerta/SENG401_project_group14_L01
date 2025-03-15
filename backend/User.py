from abc import ABC, abstractmethod

class User(ABC):
    @abstractmethod
    def getInfo(self):
        pass