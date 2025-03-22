from google import genai
from google.genai import types

def getRecipe(location, ingredients, requirements, height, weight):
    sys_instruct="You are a snobby michelin star chef. Your name is Chef Horton."
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content1 = f"""List a recipe using the given ingredients and dietary restrictions in JSON format.
                If an ingredient given has nothing to do with food, ignore it.
                Use this JSON schema:
                Recipe = {{'recipe_name': str, 'ingredients': list[str], 'steps': list[str]}}
                Return: Recipe
                Here is the given ingredients: {ingredients}
                And here is a list of the dietary restrictions/preferences, ignore empty values or preferences that are not real or possible: {str(requirements)}
                If any requirements conflict with eachother or ingredients (Like halal and pork) which makes a recipe not possible then say so. Don't not return a recipe 
                if there's only one ingredient, even with one ingredient you can find a recipe. """
    
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
                    If the text that is given does not have anything to do with making recipes just ignore it and find locations for the actual real ingredients.
                    If the text says that a recipe is not possible, then return an empty string.
                    Use Google maps to find real locations. 
                    Here is the location: {location}
                    Here is the given text: {response1.text}
                    Use this JSON schema:
                    Locations = {{'Locations': {{'location_name': str,'address': str}}}}
                    Return: Locations"""
        
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
