class FoodApp:

    def viewResults(self):
        # make call to database to recieve results
        return 0

    def downloadResults(self):
        complete = False
        # create a formatted txt file that contains what the results are to be downloaded
        with open("results.txt", "w") as file:
            # write results to file
            file.write("Temp")
            if (file != None):
                complete = True
            else:
                complete = False
        return complete
