numbersList = [3,5,7,9,11,12,15,20,25]
i = 0
coincidence = 0

while i <= 30:
    if i in range(i, len(numbersList)): 
        if numbersList[i] == i:
            coincidence+=1
            numbersList[i] = coincidence
        else:
            numbersList.insert(i,0)
    else:
        numbersList.append(0)
    i+=1
    
print(*numbersList)