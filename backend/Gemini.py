from google import genai

def getRecipe(message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = "Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes then say so. Here is the given text: " + message

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content
    )

    return response.text

def getNearestStores(location, message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = "Using the given location: " + location + "Find the addresses of stores that can be used to buy these ingredients: " + message + ". If the given list of ingredients are not actually ingredients or food just say so instead."
    
    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content
    )

    return response.text