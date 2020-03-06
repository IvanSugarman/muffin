/*
    给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
    换句话说，第一个字符串的排列之一是第二个字符串的子串。
*/
var checkInclusion = function(s1, s2) {
    if (!s1 || !s2 || s2.length < s1.length) {
    	return false;
    }

    var stringMap1 = new Array(26).fill(0),
    	stringMap2 = new Array(26).fill(0),
    	windowLength = s1.length,
    	diffs = new Array(26).fill(0),
    	codeA = 'a'.charCodeAt();

    for (var i = 0; i < s1.length; i++) {
    	stringMap1[s1.charCodeAt(i) - codeA]++;
    	stringMap2[s2.charCodeAt(i) - codeA]++;
     }

     for (i = 0; i < diffs.length; i++) {
     	diffs[i] = stringMap2[i] - stringMap1[i];
     }

    for (var j = s1.length; j < s2.length; ++j) {
    	if (isSame(diffs)) {
    		return true;
    	}

    	diffs[s2.charCodeAt(j - s1.length) - codeA]--;
    	diffs[s2.charCodeAt(j) - codeA]++;
    }

    return isSame(diffs);

     function isSame(diffs) {
     	for (var k = 0; k < diffs.length; k++) {
     		if (diffs[k] !== 0) {
     			return false;
     		}
     	}

     	return true;
     }
};