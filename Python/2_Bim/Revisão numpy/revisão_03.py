#SIZE, ITEMSIZE E NBYTES

import numpy as np 

valores = np.array([10,20,30,40],dtype=np.int64)

print("quantidade : " , valores.size)
print("por elementos", valores.itemsize)
print("total ", valores.nbytes)