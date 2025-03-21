import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest


from FoodApp import FoodApp

@pytest.fixture
def food_app():
    return FoodApp()

def test_set_get_results(food_app):
    recipe_data = "Recipe: Pasta with Tomato Sauce"
    food_app.setResults(recipe_data)
    assert food_app.getResults() == recipe_data

def test_download_results(food_app, tmp_path):
    recipe_data = "Recipe: Pancakes with Syrup"
    food_app.setResults(recipe_data)

    result = food_app.downloadResults()

    assert result == True
    with open("results.txt", "r") as file:
        content = file.read()
        assert content == recipe_data