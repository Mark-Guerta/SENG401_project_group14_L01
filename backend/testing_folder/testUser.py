import unittest
from abc import ABC, abstractmethod

class User(ABC):
    @abstractmethod
    def getInfo(self):
        pass

class TestUser(unittest.TestCase):
    
    def test_abstract_method(self):
        class ConcreteUser(User):
            def getInfo(self):
                return "Concrete User Info"
        
        # Test that abstract class cannot be instantiated
        with self.assertRaises(TypeError):
            User()
        
        # Test concrete class instantiation
        user = ConcreteUser()
        self.assertEqual(user.getInfo(), "Concrete User Info")

if __name__ == '__main__':
    unittest.main()