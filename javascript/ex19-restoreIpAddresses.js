var restoreIpAddresses = function(s) {
	var result = [];

	if (s.length === 0 || s.length > 12) {
		return result;
	}

	getIpItem(0, '', s, result);
  
  	return result;

    function getIpItem(k, str, s, arr) {
    	if (k === 4) {
    		if (s.length === 0) {
    			arr.push(str);
    		}

    		return;
    	}

    	for (var i = 0; i < 3; i++) {
    		if (i + 1 > s.length) {
    			break;
    		}

    		var temp = s.substring(0, i + 1);

    		if (check(temp, i + 1)) {
    			if (k < 3) {
    				temp += '.';
    			}
    			getIpItem(k + 1, str + temp, s.substring(i + 1), arr);
    		}
    	}
    }

    function check(str, k) {
    	return Number(str) < 256 && k === Number(str).toString().length;
    }
};
