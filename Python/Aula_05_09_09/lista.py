produtos =["Notebook", "Mouse", "Teclado"]
print(produtos)
print (f'O primeiro produto da lista é: {produtos[0]}')
print (f'O último produto da lista é: {produtos[-1]}')

produtos[2] = input("Digite o nome do produto que deseja adicionar: ")
print (f'O produto adicionado foi: {produtos[2]}')