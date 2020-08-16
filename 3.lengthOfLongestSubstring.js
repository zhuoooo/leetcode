/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queue = [],
        maxLen = 0,
        i = 0,
        targetIndex = 0
       
    for( ; i < s.length; ++i) {

        targetIndex = queue.indexOf(s[i])
        if (targetIndex !== -1) {

            // 直接到重复的字符的下一个位置
            queue.splice(0, targetIndex + 1)
        }
        queue.push(s[i])
        maxLen = Math.max(queue.length, maxLen)
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring('pwwkew'))