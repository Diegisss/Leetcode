--Ejercicio Numero 175 de Base de Datos en Mysql       <- De alguna forma en leetcode me detecta los comentarios como error, quitar esta linea

# la forma más optima de resolver esto

select Person.firstName, Person.lastName,
Address.city, Address.state
from Person
left join Address
on Person.personId = Address.personId 