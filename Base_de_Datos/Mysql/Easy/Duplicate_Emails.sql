-- Ejercicio Numero 182 de Base de datos en Mysql           <- Quitar comentario, Leetcode lo marca como error

select email
from Person
group by email
having Count(email)>1