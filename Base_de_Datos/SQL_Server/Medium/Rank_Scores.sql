--Ejercicio Numero 178 de Leetcode en Base de Datos

select score, dense_rank() over (ORDER BY score desc) AS rank
from Scores