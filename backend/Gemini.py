from google import genai

def getResponse(message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = "Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes then say so. Here is the given text: " + message

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content
    )
    recipeName, recipeSteps, recipeNotes = formartResponse(response.text)
    return recipeName, recipeSteps, recipeNotes
# recipeName, recipeSteps, recipeNotes
# but adding single square brackets before and after the numbered list points
def formartResponse(message):
    requiredFormat = "Remember the format, Recipe Name (only recipe name) \n Recipe Steps (each step on a newline, keeping their numbered list) \n Notes (keep notes: title) and skipping the last sentence if it relates to the words 'given text'. Additionally, between all of these sections, it should contain the text 'this@is#a*placeholder'."
    promptCreation = "Using the remembered formated and given text, format the given text to the remembered format. "
    
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = requiredFormat + promptCreation + message 
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=content
    )
    recipeName, recipeSteps, recipeNotes = intenseFormat(response.text)
    return recipeName, recipeSteps, recipeNotes

def intenseFormat(message):
    # message = "test"
    responseGroup = message.split(sep='this@is#a*placeholder')
    recipeName = responseGroup[0]
    recipeSteps = responseGroup[1]
    recipeNotes = responseGroup[2]
    return recipeName, recipeSteps, recipeNotes
        