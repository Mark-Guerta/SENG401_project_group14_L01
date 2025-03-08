from google import genai


def getResponse():
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")

    response = client.models.generate_content(
        model="gemini-2.0-flash", contents="Explain how AI works"
    )

    return response.text