for aluno in range(5):
    aluno_nome = input(f"Digite o nome do {aluno+1}º aluno: ")
    nota1 = float(input(f"Digite a primeira nota do {aluno+1}º aluno: "))
    
    if nota1 >= 6:
        print(f"Aluno: {aluno_nome} Reprovado com nota {nota1:.2f}")  
    else:
        print(f"Aluno: {aluno_nome} Aprovado com nota {nota1:.2f}")  
