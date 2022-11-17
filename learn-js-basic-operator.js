//1). Operator Math
let result = 5 + 5; // current result = 10
document.writeln("5 + 5 = " + result);
document.writeln("<br>");

result = result - 5; // current result = 10 
document.writeln(" 10 - 5 = " + result);
document.writeln("<br>");

result = result * 5; // current result = 5 
document.writeln(" 5 * 5 = " + result);
document.writeln("<br>");

result = result / 5; // current result = 25 
document.writeln(" 25 / 5 = " + result);
document.writeln("<br>");


result = result ** 2; // current result = 5
document.writeln(" 5 ** 2 = " + result);
document.writeln("<br>");

result = result % 4; // current result = 25
document.writeln(" 25 % 5 = " + result);
document.writeln("<hr>");

//2) Operator Augmented Assigned
let result2 = 10+10; //current result = 20
document.writeln(" 10 + 10 = " + result2);
document.writeln("<br>");

result2 -= 10; //current result = 20
document.writeln(" 20 - 10 = " + result2);
document.writeln("<br>");

result2 *= 10; //current result = 10 
document.writeln(" 10 * 10 = " + result2);
document.writeln("<br>");

result2 *= 10; //current result = 10 
document.writeln(" 10 * 10 = " + result2);
document.writeln("<br>");

result2 /= 10; //current result = 1000
document.writeln(" 100 / 10 = " + result2);
document.writeln("<br>");

result2 %= 8; //current result = 100
document.writeln(" 100 % 8 = " + result2);
document.writeln("<hr>");

//3) Operator Unary
let result3 = +5;
document.writeln(" +5 = " + result3);
document.writeln("<br>");

result3--; //Decrese 1 Number
document.writeln("result-- = " + result3);
document.writeln("<br>");

result3++; //Increse 1 Number
document.writeln("result++ = " + result3);
document.writeln("<br>");

result3 = -result3; //Turns to negative number
document.writeln("-result = " + result3);
document.writeln("<hr>");

//4) Operator Comparison

let compare = 5 == "5";
document.writeln(compare);
document.writeln("<br>");

compare = 5 === "5";
document.writeln(compare);
document.writeln("<br>");

compare = 5 < 10;
document.writeln(compare);
document.writeln("<br>");

compare = 5 > 10;
document.writeln(compare);
document.writeln("<br>");

compare = 5 !== "5";
document.writeln(compare);
document.writeln("<br>");

compare = 5 != 5;
document.writeln(compare);
document.writeln("<hr>");

//5) Operator Logical
const logicValue = 80;
const logicResult = 75;

const passValue = logicValue > 75;
document.writeln("passValue = "+passValue);
document.writeln("<br>");

const passResult = logicResult > 75;
document.writeln("passResult = "+passResult);
document.writeln("<br>");

const pass = passValue && passResult;
document.writeln("Full Pass = "+pass);
document.writeln("<hr>");

// 6) Operator In

const inExample = {
    stringIn : "String In Example",
    undefineIn : undefined, 
    booleanIn : true,
    numberIn : 100,
};

if("stringIn" in inExample){
    document.writeln(`Test in = ${inExample.stringIn}`);
    document.writeln("<br>");
} else{
    document.writeln("didnt find any in lane");
    document.writeln("<br>");
};

if("undefineIn" in inExample){
    document.writeln(`Undefine In = ${inExample.undefineIn}`);
    document.writeln("<hr>");
}

//7). Ternary Operator

const ternaryExample = 85;
const statement = ternaryExample >= 90 ? "True ternary statement" : "False ternary statement";
document.writeln(`${statement}`);
document.writeln("<hr>");

//8). Nullish Coalescing Operator

let parameterExample;
let coalescingExample = parameterExample ?? "Its true coalescing";
document.writeln(`${coalescingExample}`);
document.writeln("<hr>");

//9). Logical Operator Or ||

console.info("Or" || "");
console.info("" || []);
console.info("0" || "ZERO");
console.info(0 || "ZERO");
console.info(null || "NULL");
console.info(undefined || "UNDEFINED");
console.info(0 || false);

const orExample = {
    firstOrExample : "Or Example",
    secondOrExample : "More Example"
};
const orStatement = orExample.firstOrExample || orExample.secondOrExample;
console.info(orStatement);

//10). Operator Double &&

console.info("Or" && "");
console.info("" && []);
console.info("0" && "ZERO");
console.info(0 && "ZERO");
console.info(null && "NULL");
console.info(undefined && "UNDEFINED");
console.info(0 && false);
