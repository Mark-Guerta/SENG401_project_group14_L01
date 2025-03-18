class FoodApp:

    def __init__(self):
        self.recipe = None

    def setResults(self, recipe):
        self.recipe = recipe

    def getResults(self):
        return self.recipe

    def downloadResults(self):
        complete = False
        # create a formatted txt file that contains what the results are to be downloaded
        with open("results.txt", "w") as file:
            # write results to file
            file.write(self.recipe)
            if (file != None):
                complete = True
            else:
                complete = False
        return complete
