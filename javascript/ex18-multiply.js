/* 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。 */
var multiply = function(num1, num2) {
    if (num1 === '' || num2 === '' || num1 === '0' || num2 === '0') {
    	return '0';
    }

    let res = new Array(num1.length + num2.length).fill(0);
    let str = '';
    let flag = false;
    const cca = String.prototype.charCodeAt;
    const code0 = cca.call('0');

    for (let i = num1.length - 1; i >= 0; i--) {
    	let n1 = cca.call(num1[i]) - code0;

    	for (let k = num2.length - 1; k >= 0; k--) {
    		 let n2 = cca.call(num2[k]) - code0;
    		 let sum = n1 * n2;

         	res[i + k + 1] += sum % 10;
    		res[i + k] += Math.floor(sum / 10);
    	}
    }

    for (let o = res.length; o >= 0; o--) {
    	if (res[o] > 9) {
    		res[o - 1] = Math.floor(res[o] / 10);
    		res[o] = res[o] % 10;
    	}
    }

    for (let j = 0; j < res.length; j++) {
    	if (!flag && res[j] === 0) {
    		continue;
    	}

    	str += res[j];
    	flag = true;
    }

    return str;
};
