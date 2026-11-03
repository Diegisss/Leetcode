#Ejercicio numero 1 resuelto en python: Si quieres que funcione en Visual Studio Code, debes de poner los List con la L en minuscula, o sea asi, list
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indices = {}
        for i in range(len(nums)):
            a = target - nums[i]
            if a in indices:
                return [indices[a], i]
            else:
                indices[nums[i]] = i
