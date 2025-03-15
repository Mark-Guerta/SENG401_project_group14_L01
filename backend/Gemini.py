from google import genai


def getResponse():
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents="Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes then say so. Here is the given text: I have chicken and rice"
    )

    return response.text

print(getResponse())