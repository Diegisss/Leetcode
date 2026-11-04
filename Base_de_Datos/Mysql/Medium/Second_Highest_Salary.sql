--Ejercicio Numero 176 de Base de datos en Mysql  <- Quitar comentario, Leetcode lo marca como error

#primera vez usando funciones de agregación idk
select distinct max(salary) as SecondHighestSalary
from employee
where salary < (select max(salary) from employee);