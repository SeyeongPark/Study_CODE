weight = input("Weight: ")
unit = input("(K)g or (L)bs: ")

if (unit == "k" or "K"):
    weight = float(weight) * 2.2
    print("Weight in Lbs: ", weight)

elif (unit == "l" or "L"):
    weight = float(weight) * 0.45
    print("Weight in Kg: ", weight)

else: 
    print("Wrong type. Please enter 'k' or 'l'.")
