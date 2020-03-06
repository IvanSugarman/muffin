/*
字符串最长非重复子串
两个指针时间复杂度 O(n)
*/
function lengthOfString(s) {
	var start = 0,
		end = 0,
		unique = {},
		result = 0;

	if (!s || typeof s !== 'string') {
		return 0;
	}

	if (s.length === 1) {
		return 1;
	}

	for (; end < s.length; end++) {
		if (unique.hasOwnProperty(s[end])) {
			start = Math.max(start, unique[s[end]] + 1);
		}

		unique[s[end]] = end;
		result = Math.max(result, end - start + 1);
	}

	return result;
}