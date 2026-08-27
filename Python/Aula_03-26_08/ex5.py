num = input("DIGITE UM NUIMERO  ")
num_2 = input("DIGITE UM NUIMERO  ")

if not num.isdigit() or not num_2.isdigit():
    print("Não pode digitar letras!")
else:
    num = int(num)
    num_2 = int(num_2)
    
    if num > num_2 :   
        print(num_2, " " , num)
    elif num_2 > num:
        print(num, " ", num_2)
    else:
        print("Nem uma das opções!")
