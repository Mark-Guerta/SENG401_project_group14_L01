import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest
from unittest.mock import patch, MagicMock
from Gemini import getRecipe, formatRecipe, formatLocation

@pytest.fixture
def mock_client():
    with patch('Gemini.genai.Client') as MockClient:
        mock_instance = MockClient.return_value
        yield mock_instance

def test_getRecipe_with_location(mock_client):
    mock_response1 = MagicMock()
    mock_response1.text = """```json
    {"recipe_name": "Chicken Rice Bowl", "ingredients": ["Chicken", "Rice", "Eggs"], "steps": ["Cook rice.", "Fry chicken.", "Combine ingredients."]}
    ```"""

    mock_response2 = MagicMock()
    mock_response2.text = """```json
    {"Locations": [{"location_name": "Superstore", "address": "123 Calgary St"}]}
    ```"""

    mock_client.models.generate_content.side_effect = [mock_response1, mock_response2]

    recipe, local = getRecipe("Calgary", "Chicken, rice, eggs", [False, False], "", "")

    assert "Chicken Rice Bowl" in recipe
    assert "Superstore" in local

def test_getRecipe_without_location(mock_client):
    mock_response1 = MagicMock()
    mock_response1.text = """```json
    {"recipe_name": "Vegetable Stir Fry", "ingredients": ["Broccoli", "Carrots", "Soy Sauce"], "steps": ["Chop vegetables.", "Stir fry in a pan.", "Add soy sauce."]}
    ```"""

    mock_client.models.generate_content.return_value = mock_response1

    recipe, local = getRecipe("", "Broccoli, Carrots, Soy Sauce", [False, False], "", "")

    assert "Vegetable Stir Fry" in recipe
    assert local is None

def test_formatRecipe():
    recipe_text = """Here is a delicious recipe:```json
    {"recipe_name": "Pasta Alfredo", "ingredients": ["Pasta", "Cream", "Cheese"], "steps": ["Boil pasta.", "Make sauce.", "Combine and serve."]}
    ```Enjoy your meal!"""

    intro, jsonRecipe, conclu = formatRecipe(recipe_text)

    assert "Here is a delicious recipe:" in intro
    assert "Pasta Alfredo" in jsonRecipe
    assert "Enjoy your meal!" in conclu

def test_formatLocation():
    location_text = """Nearby stores:```json
    {"Locations": [{"location_name": "Fresh Market", "address": "456 Local Rd"}]}
    ```Shop now!"""

    intro, jsonLocation, conclu = formatLocation(location_text)

    assert "Nearby stores:" in intro
    assert "Fresh Market" in jsonLocation
    assert "Shop now!" in conclu
