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
    