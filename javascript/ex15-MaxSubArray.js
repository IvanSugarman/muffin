/*
给定一个数组，和一个整数k， 找到连续长度为k的子数组，使得他们的和最大。
*/

function count(arr, k) {
	var sum = 0,
		i,
		temp;

	if (!Array.isArray(arr) || !arr.length || !k) {
		return sum;
	}

	for (let i = 0; i < k; i++) {
		sum += arr[i];
	}

	for (let i = 0; i < arr.length - k; i++) {
		sum = Math.max(sum - arr[i] + arr[i + k], sum);
	}

	return sum;
}
