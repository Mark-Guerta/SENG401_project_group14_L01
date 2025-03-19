from google import genai

def getRecipe(location, message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content1 = "Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes type NULL. Here is the given text: " + message

    response1 = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content1
    )

    content2 = "Using the given location: " + location + "Find the addresses of stores that can be used to buy the ingredients in this recipe: " + response1.text + ". If the given recipe is not a recipe type NULL."
    response2 = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content2
    )
    content3 = "Using the given locations and ingredients from this text: " + response2.text + " calculate what the estimated cost of these ingredients would be. If there is no locations or ingredients just say NULL"
    response3 = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content3
    )

    return response1.text, response2.text, response3.text
