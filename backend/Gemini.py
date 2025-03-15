from google import genai

def getResponse(message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = "Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes then say so. Here is the given text: " + message

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content
    )

    return response.text
