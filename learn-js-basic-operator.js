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

//1) Operator Augmented Assigned
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

//1) Operator Unary
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