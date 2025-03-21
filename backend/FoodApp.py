from Gemini import recipeCheckingBeforeDownload

class FoodApp:

    def __init__(self):
        self.recipe = None
        self.recipeName = None
        self.recipeIngredients = None
        self.recipeSteps = None 
    def setResults(self, recipe):
        self.recipe = recipe
        
    def setRecipeVariables(self, recipeVariables):
        self.recipeName = recipeVariables[0]
        self.recipeIngredients = recipeVariables[1]
        self.recipeSteps = recipeVariables[2]

    def getResults(self):
        return self.recipe

    def downloadResults(self):
        complete = False
        # create a formatted txt file that contains what the results are to be downloaded
        recipeChecking = recipeCheckingBeforeDownload(self.recipe)
        if "true" in recipeChecking.lower():
            with open("results.txt", "w") as file: # clearing the file
                pass
            with open("results.txt", "a") as file:
                # write results to file
                file.write(f'''Recipe Name: {self.recipeName} \n\n''')
                file.write("Ingredients\n")
                for i in self.recipeIngredients:
                    file.write('* '+ i + '\n')
                file.write('\nSteps \n')
                for i,j in enumerate(self.recipeSteps):
                    file.write(f'''{i+1}. {j}\n''')
                if (file != None):
                    complete = True
                else:
                    complete = False
        else:
            complete = False
        return complete
