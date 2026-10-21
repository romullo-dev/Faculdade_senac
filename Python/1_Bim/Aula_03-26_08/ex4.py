temp = input("DIGITE UM NUIMERO  ")
    
if not temp.isdigit():
    print("Não pode digitar letras!")
else:
    temp = int(temp)
    if temp >= 40:
        print("MUITO QUENTE  ")
    elif temp > 30:
        print("QUENTE  ")
    elif temp > 20:
        print("NORMAL  ")
    elif temp > 10:
        print("FRIO ")
    else: 
        print("MUITO FRIO")
