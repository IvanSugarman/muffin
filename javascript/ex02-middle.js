/*
* 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))
* 二分法
*/
function getMedian(nums1, nums2) {
    let tempArray;
    let temp;
    let m = nums1.length;
    let n = nums2.length;

    if (Array.isArray(nums1) && Array.isArray(nums2)) {
        if (m > n) {
            tempArray = nums1;
            nums1 = nums2;
            nums2 = tempArray;
            
            temp = m;
            m = n;
            n = temp;
        }

        let min = 0;
        let max = m;
        let half = Math.floor((m + n + 1) / 2);
        let i, j, left, right;

        while (min <= max) {
            i = (min + max) >> 1;
            j = half - i;

            if (i < max && nums1[i] < nums2[j - 1]) {
                min = i + 1;
            } else if (i > min && nums1[i - 1] > nums2[j]) {
                max = i - 1;
            } else {
                left = 0;

                if (i === 0) {
                    left = nums2[j - 1];
                } else if (j === 0) {
                    left = nums1[i - 1];
                } else {
                    left = Math.max(nums1[i - 1], nums2[j - 1]);
                }

                if ((m + n) % 2 === 1) {
                    return left;
                }

                right = 0;
                
                if (i === m) {
                    right = nums2[j];
                } else if (j === n) {
                    right = nums1[i];
                } else {
                    right = Math.min(nums1[i], nums2[j]);
                }

                return (left + right) / 2;
            }
        }
    }
    return 0;
}

getMedian([1, 2], [3, 4]);