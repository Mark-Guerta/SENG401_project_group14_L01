from Gemini import recipeCheckingBeforeDownload

class FoodApp:
    recipe = "Not Set"
    def __init__(self):
        self.recipe = None

    def setResults(self, recipe):
        self.recipe = recipe

    def getResults(self):
        return self.recipe

    def downloadResults(self):
        complete = False
        # create a formatted txt file that contains what the results are to be downloaded
        recipeChecking = recipeCheckingBeforeDownload(self.recipe)
        if "true" in recipeChecking.lower():
            with open("results.txt", "w") as file: # clearing the file
                pass
            with open("results.txt", "w") as file:
                # write results to file
                file.write(self.recipe)
                if (file != None):
                    complete = True
                else:
                    complete = False
        else:
            with open("results.txt", "w") as file:
                # write results to file
                file.write("checking: " + recipeChecking)
            complete = False
        return complete
