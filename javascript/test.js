// 风格一 指令式编程 imperativevar numbers = [4,10,0,27,42,17,15,-6,58];var faves = [];var magicNumber = 0;

pickFavoriteNumbers();
calculateMagicNumber();
outputMsg();                // The magic number is: 42// ***************function calculateMagicNumber() {
for (let fave of faves) {
    magicNumber = magicNumber + fave;
}

function pickFavoriteNumbers() {
    for (let num of numbers) {
        if (num >= 10 && num <= 20) {
            faves.push(num);
        }
    }
} 
function outputMsg() {
    var msg = `The magic number is: ${magicNumber}`;
    console.log(msg);
}

// 风格二 声明式编程 declarativevar sumOnlyFavorites = FP.compose( [
FP.filterReducer(FP.gte(10)),
    FP.filterReducer(FP.lte(20))(sum); 
    var printMagicNumber = FP.pipe([
        FP.reduce(sumOnlyFavorites, 0),
        constructMsg,
        console.log
    ]);
    var numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58];

printMagicNumber(numbers);        // The magic number is: 42// ***************function sum(x,y) { return x + y; }function constructMsg(v) { return `The magic number is: ${v}`; }