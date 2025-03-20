from google import genai
from google.genai import types

def getRecipe(location, ingredients, requirements, height, weight):
    sys_instruct="You are a snobby five star michelin chef. Your name is Chef Jacques-Pierre."

    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")

    content1 = f"""List a recipe using the given ingredients and dietary restrictions in JSON format.
                If the ingredients that are given do not have anything to do with making recipes return just NULL. 
                Use this JSON schema:
                Recipe = {{'recipe_name': str, 'ingredients': str, 'steps': list[str]}}
                Return: Recipe
                Here is the given ingredients: {ingredients}
                And here is a list of the dietary restrictions/preferences: {requirements}"""
    
    if (height != False):
        content1 += f"""Fit the recipe to this height: {height}"""

    if (weight != False):
        content1 += f"""Fit the recipe to this weight: {weight}"""
    
    response1 = client.models.generate_content(
        model="gemini-2.0-flash", 
        config=types.GenerateContentConfig(system_instruction=sys_instruct),
        contents=content1
    )

    if (location != "NULL"):
        content2 = f"""Given a location and a recipe, list locations nearby that sell the recipe ingredients in JSON format. 
                    If the text that is given does not have anything to do with making recipes return just NULL. 
                    Use this JSON schema:
                    Locations = {{'Locations': {{'location_name': str,'address': str,'food_available': list[str]}}}}
                    Return: Locations
                    Here is the given text: {response1.text}"""
        
        response2 = client.models.generate_content(
            model="gemini-2.0-flash", 
            config=types.GenerateContentConfig(system_instruction=sys_instruct),
            contents=content2
        )

    return response1.text