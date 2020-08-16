/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashSet = {},
        val

    for(let i = 0; i < nums.length; ++i) {
        val = target - nums[i]

        if (hashSet[val] !== undefined) {
            return [hashSet[val], i]
        }
        hashSet[nums[i]] = i
    }
};


console.log(twoSum([2, 1, 7, 11, 15], 9))