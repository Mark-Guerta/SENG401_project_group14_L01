

def viewResults(selectedUser):
    # make call to database to recieve results
    return 0

def downloadResults(selectedUser):
    compelete = False
    # create a formatted txt file that contains what the results are to be downloaded
    with open("results.txt", "w") as file:
        # write results to file
        file.write("Temp")
        if (file != None):
            compelete = True
        else:
            compelete = False
    return compelete
