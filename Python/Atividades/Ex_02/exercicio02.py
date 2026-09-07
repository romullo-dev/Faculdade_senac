nota_01 = int(input("Digite a primeira nota: "))
nota_02 = int(input("Digite a segunda nota: "))

media = (nota_01 + nota_02) / 2

if media < 5:
    print("O aluno está reprovado com a média: ", media)
elif media < 7:
    print("O aluno está em recuperação com a média: ", media)
else:
    print("O aluno está aprovado com a média: ", media)
