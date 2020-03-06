/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortArray = nums.sort((a, b) => a - b);
    let i = 0;
    let left;
    let right;
    let result = [];
    let cur;

    if (sortArray[0] > 0 || sortArray.length < 3 || sortArray[sortArray.length - 1] < 0) {
        return result
    }

    for (; i < sortArray.length; i++) {
        if (sortArray[i] > 0) {
            break;
        }

        if (sortArray[i] === sortArray[i - 1]) {
            continue;
        }

        left = i + 1;
        right = sortArray.length - 1;

        while (left < right) {
            cur = sortArray[i];
            leftValue = sortArray[left];
            rightValue = sortArray[right];
            if (cur + leftValue + rightValue === 0) {
                result.push([cur, leftValue, rightValue]);

                // 去重
                while (left < right && leftValue === sortArray[left + 1]) { left++; }
                while (right > left && rightValue === sortArray[right - 1]) { right--; }

                left++;
                right--;
            } else if (leftValue + rightValue + cur < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
