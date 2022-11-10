//1). Comment
// Example Comment

/*2). Paragraph Comment
 Another Example Comment
 */

//3). Basic show data type string
document.writeln("String using script src");
document.writeln("<br>");
document.writeln('String using script src single quotation mark');
document.writeln("<br>");

//4). Basic show data type number
document.writeln(100);
document.writeln("<br>");
document.writeln(100.123);
document.writeln("<br>");
document.writeln(0b11111010);
 
//5). Basic show data type boolean
document.writeln(true); //true condition
document.writeln("<br>");
document.writeln(false); //false condition
document.writeln("<br>");

//6). Double String shows/string concenate
document.writeln("Double :" + "String");
document.writeln("<br>");
document.writeln('Multi' + 'triple' + 'string'); 
document.writeln("<br>");

//7). Escape sequence
document.write("\n Enter \n Sequence");
document.writeln("<br>");
document.write("\\Slash \\Sequence");
document.writeln("<br>");
document.write("\"Two Qutation Mark\"");
document.writeln("<br>");
document.write("'Single Qutation Mark'");
document.writeln("<br>");

//8). Variable To Store data type
var variableFull = "Instant" + " " + "Variable" + " " + "Text";
document.writeln(variableFull);
document.writeln("<br>");

var variableVar;
variableVar = "A Simple variable using Var 'can change as you like'";
document.writeln(variableVar);
document.writeln("<br>");

let variableLet;
variableLet = "A Simple variable using Let 'can also change as you like'";
document.writeln(variableLet);
document.writeln("<br>");

const variableConst = "Constant Variable That 'Cannot Change'";
document.writeln(variableConst);
document.writeln("<br>");