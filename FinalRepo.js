'use strict'
// 1行目に記載している 'use strict' は削除しないでください
///テストパターン//////////////////////////////////////////////////////
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//初めのキッカケ
/////////////////////////////////////////////////////////////////////////

// Day06 conditionals-cont PairWork 3
3 === 3 && 1;             // true && true  ... 1
1 > 2 || 2 > 2 || 3 > 2;  // false || false || true ... true
5 < 5 || 75 < 74;         // false || false ...false
 
//////////////////////////////////////////////////////////////////////////
//使い方例
//////////////////////////////////////////////////////////////////////////
// Day06 conditionals-cont 基礎演習 3
// //3  anotherGreeting
//   /**
//     * @param {string} ??? - 人の名前
//     * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
//     * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
//     * @returns {string} 与えられた引数に応じた適切な挨拶の文章
//   */
function anotherGreeting(Person, sir, greeting) {
    if (typeof Person === "string" && typeof sir === "boolean" && typeof greeting === "boolean") {
        if (sir === true && greeting === true) {
            return "Hello, " + Person + "-san.";
        } else if (sir === false && greeting === true) {
            return "Hello, " + Person + "!";
        } else if (sir === true && greeting === false) {
            return "Goodbye, " + Person + "-san.";
        }
    } else {
        return "無効なインプットです！";
    }
}
test(anotherGreeting("Mary", true, true), "Hello, Mary-san.")


//Day03  conditionals-cont-intro  応用演習 3
//与えられた引数のうち一番大きい数字を返すgetGreatestValue 
//という名前の関数を作成してください。

function getGreatestValue(num21, num22, num23, num24, num25) {
    num23 = num23 || 0;
    num24 = num24 || 0;
    num25 = num25 || 0;
    return Math.max(num21, num22, num23, num24, num25);
}
console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示


//Day05  TDD  応用演習  1
//1 関数 concatenateNumbers を宣言してください。
/**
* @param {number} ??? - 1 番目の数値
* @param {number} [???] - 2 番目の数値 (任意)
* @param {number} [???] - 3 番目の数値 (任意)
* @returns {string} 与えられた数字を 1 つの文字列に結合したもの
*/
function concatenateNumbers(firstnum, secondnum, thirdnum,) {
    firstnum = String(firstnum || '');
    secondnum = String(secondnum || '');
    thirdnum = String(thirdnum || '');
    return firstnum + secondnum + thirdnum;
}
test(concatenateNumbers(7),"7");
test(concatenateNumbers(7, 9),"79");
test(concatenateNumbers(7, 9, 2),"792");
