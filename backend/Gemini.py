from google import genai
from google.genai import types

def getRecipe(location, message, requirements):
    sys_instruct="You are a snobby five star michelin chef. Your name is Chef Jacques-Pierre."

    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")

    content1 = f"""List a recipe using the given ingredients in JSON format.
                If this text that is given does not have anything to do with making recipes return NULL. 
                Use this JSON schema:
                Recipe = {{'recipe_name': str, 'ingredients': str, 'steps': list[str]}}
                Return: Recipe
                Here is the given text: {message}"""
    

    response1 = client.models.generate_content(
        model="gemini-2.0-flash", 
        config=types.GenerateContentConfig(system_instruction=sys_instruct),
        contents=content1
    )

    content2 = "Using the given location: " + location + "Find the addresses of stores that can be used to buy the ingredients in this recipe: " + response1.text + ". If the given recipe is not a recipe type NULL."
    content2 = f"""Given a location and a recipe, list locations nearby that sell the recipe ingredients in JSON format. 
                If this text that is given does not have anything to do with making recipes return NULL. 
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

print(getRecipe("Schulich School of Engineering", "Chicken, rice, eggs", "Nothing"))