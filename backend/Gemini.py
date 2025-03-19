from google import genai

def getResponse(message):
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = "Using the given text, make a recipe for a meal. If this text that is given does not have anything to do with making recipes then say so. Here is the given text: " + message

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=content
    )
    formattedResponse = formartResponse(response.text)
    return formattedResponse

def formartResponse(message):
    requiredFormat = "Remember the format, Recipe Name (only recipe name) \n Recipe Steps (each step on a newline, keeping their numbered list but adding single square brackets before and after the numbered list points) \n Notes (keep notes title) and skipping the last sentence if it relates to the words 'given text'. "
    promptCreation = "Using the remembered formated and given text, format the given text to the remembered formart. "
    
    client = genai.Client(api_key="AIzaSyCpnYk7EshXUwbqK_PBp7izaPVrd5wK1q8")
    content = requiredFormat + promptCreation + message 
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=content
    )
    fixedResponse = intenseFormat(response.text)
    return fixedResponse
    # return response.text

def intenseFormat(message):
    numberListCounter = 1
    while (message.find('['+str(numberListCounter)+']') != -1):
        message = message.replace(str('['+str(numberListCounter)+']'),"\n"+str(numberListCounter))
        numberListCounter+=1
        if (numberListCounter >= 30):
            break
    return message + str(numberListCounter)
        