import pytest
from Guest import Guest

class TestGuest:
    def test_guest_initialization(self):
        guest = Guest()
        assert guest.result == ""

    def test_guest_get_info(self):
        guest = Guest()
        assert guest.getInfo() is None

    def test_guest_set_result(self):
        guest = Guest()
        guest.setResult("Test Result")
        assert guest.result == "Test Result"

    def test_guest_get_result(self):
        guest = Guest()
        guest.result = "Test Result"
        assert guest.getResult() == "Test Result"
