from google import genai
from google.genai import types

def getRecipe(location, ingredients, requirements, height, weight):
    sys_instruct="You are a snobby five star michelin chef. Your name is Chef Jacques-Pierre."

    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")

    content1 = f"""List a recipe using the given ingredients and dietary restrictions in JSON format.
                If the ingredients that are given do not have anything to do with making recipes return just NULL. 
                Use this JSON schema:
                Recipe = {{'recipe_name': str, 'ingredients': list[str], 'steps': list[str]}}
                Return: Recipe
                Here is the given ingredients: {ingredients}
                And here is a list of the dietary restrictions/preferences, ignore False values: {str(requirements)}"""
    
    if (height != ""):
        content1 += f"""Fit the recipe to this height: {str(height)}"""

    if (weight != ""):
        content1 += f"""Fit the recipe to this weight: {str(weight)}"""
    
    response1 = client.models.generate_content(
        model="gemini-2.0-flash", 
        config=types.GenerateContentConfig(system_instruction=sys_instruct),
        contents=content1
    )

    if (location != ""):
        content2 = f"""Given a location and a recipe, list locations nearby that sell the recipe ingredients in JSON format. 
                    If the text that is given does not have anything to do with making recipes return just NULL. 
                    Use this JSON schema:
                    Locations = {{'Locations': {{'location_name': str,'address': str}}}}
                    Return: Locations
                    Here is the location: {location}
                    Here is the given text: {response1.text}"""
        
        response2 = client.models.generate_content(
            model="gemini-2.0-flash", 
            config=types.GenerateContentConfig(system_instruction=sys_instruct),
            contents=content2
        )

        return response1.text, response2.text

    return response1.text, None

def formatRecipe(recipe):
    intro, partition, recipe_conclu = recipe.partition("```json")
    jsonRecipe, partition, conclu = recipe_conclu.partition("```")
    return intro, jsonRecipe, conclu

def formatLocation(location):
    intro, partition, location_conclu = location.partition("```json")
    jsonLocation, partition, conclu = location_conclu.partition("```")
    return intro, jsonLocation, conclu

#recipe, local = getRecipe("Calgary", "Chicken, rice, eggs", [False, False], "", "")
#x, y, z = formatLocation(local)
#print(y)