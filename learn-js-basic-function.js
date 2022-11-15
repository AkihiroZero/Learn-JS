//1) Convertion String & Number
    //String To Number
const value = parseInt("5");
const value2= 5;
const sum = value + value2;
document.writeln(`${sum}`);
document.writeln("<br>");
    //More Example
document.writeln(`${parseInt("5.9")}`);
document.writeln("<br>");
document.writeln(`${parseFloat("5.6")}`);
document.writeln("<br>");
document.writeln(`${Number("5.7")}`);
document.writeln("<br>");

    //Number To String
const int = 5;
const int2 = 5;
const total = int.toString() + int2.toString();

document.writeln(`${total}`);
document.writeln("<br>");

    //Not a Number NaN
document.writeln(`${parseInt("Not a Number")}`);
document.writeln("<br>");
document.writeln(`${parseFloat("9.4Not a Number")}`);
document.writeln("<br>");
document.writeln(`${Number("8.2Not a Number")}`);
document.writeln("<br>");

const first = Number("NaN");
const second = Number("15");
const totalNum = first + second;
document.writeln(totalNum);
document.writeln("<br>");
document.writeln(isNaN(totalNum));
document.writeln("<br>");
document.writeln(isNaN(second));
document.writeln("<hr>");

