notas = [8, 7, 9, 6, 10]
aprovados = 0
reprovados = 0
media = 0

for recebe in notas:
    if recebe >= 6:
        aprovados += 1
    else:
        reprovados += 1
        
media = sum(notas) / len(notas)


print(f'Número de aprovados: {aprovados}')
print(f'Número de reprovados: {reprovados}')
print(f'Média da turma: {media:.2f}')