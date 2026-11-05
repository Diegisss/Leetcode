--Ejercicio Numero 177 de Leetcode en SQL_Server

CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    IF @N<=0
        RETURN NULL;
    RETURN (
        /* Write your T-SQL query statement below. */
        SELECT min(salary)
        FROM (SELECT DISTINCT TOP(@N) salary
        from Employee
        order by salary desc) as la
        HAVING count(*) = @N
    );
END