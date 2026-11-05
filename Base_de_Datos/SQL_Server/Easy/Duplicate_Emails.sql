--Ejercicio Numero 182 de leetcode en Base de datos con SQL_Server

select email
from Person
group by email
having Count(email)>1