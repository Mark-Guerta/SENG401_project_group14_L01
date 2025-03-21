import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest
from Prompt import Prompt

def test_initialization():
    prompt = Prompt("Hello, world!")
    assert prompt.get_message() == "Hello, world!"

def test_set_message():
    prompt = Prompt("Initial message")
    prompt.set_message("Updated message")
    assert prompt.get_message() == "Updated message"

def test_empty_message():
    prompt = Prompt("")
    assert prompt.get_message() == ""
    prompt.set_message("New message")
    assert prompt.get_message() == "New message"
