/*Primer ejercicio de leetcode: De los mas sencillos.*/
var twoSum = function (nums, target) {
    let arreglo = {};
    let a;
    for (let i = 0; i < nums.length; i++) {
        a = target - nums[i];
        if (a in arreglo) {
            return [arreglo[a], i];
        }
        else {
            arreglo[nums[i]] = i
        }
    }
};