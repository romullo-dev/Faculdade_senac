#Estatística com NumPy

import numpy as np

tempos = np.array([120,135,128,142,125])

print ("Total : ", np.sum(tempos))
print ("Media : ", np.mean(tempos))
print ("Menor : ", np.min(tempos))
print ("Maior : ", np.max(tempos))
print ("Desvio padrão : ", np.std(tempos))


