idade = int(input("Digite sua idade: "))
if idade < 18:
    print("Emprestimo não permitido para menores de idade.")
else:
    salario = float(input("Digite seu salário: "))
    emprestimo = float(input("Digite o valor do empréstimo desejado: "))
    
    limite30 = salario * 0.3 
    limite50 = salario * 0.5 
    
    if emprestimo <= limite30:
        print("Empréstimo aprovado.")
    elif emprestimo <= limite50:
        print("Analise manual, em breve entraremos em contato.")
    else:
        print("Empréstimo não permitido. O valor solicitado excede o limite permitido.")

        
    #print(f"Limite de empréstimo permitido: R${limite:.2f}")