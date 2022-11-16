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

//2). If Expression

const ifExample = 90;

if(ifExample > 80){
    document.writeln("You Passed If Condition")
    document.writeln("<br>");

}
if(ifExample < 100){
    document.writeln("Another Passed If Condition")
    document.writeln("<br>");
}

//3) Else Expression

const elseExample = 75;

if (elseExample > 80) {
    document.writeln("Wont Show Cause its false"); 
}
else{
    document.writeln("Its Else Condition");
    document.writeln("<hr>");
}

//4) ElseIf Expression

const elseIfExample = 80;

if (elseIfExample < 75) {
    document.writeln("If Expression");    
}else if (elseIfExample > 75) {
    document.writeln("Its Else If Expression");
    document.writeln("<hr>");
}else{
    document.writeln("Else Expression");
}

//5). Switch Expression

const switchExample = "B";

switch (switchExample) {
    case "A":
        document.writeln("A Switch Case 1 Expression");
        document.writeln("<br>");
        break;
    case "B":
        document.writeln("Another Switch Case");
        document.writeln("<hr>");
    default:
        break;
}

//6). Type Off

const typeoffString = "String";
document.writeln(`${typeof typeoffString}`);
document.writeln("<br>");
const typeoffBoolean = true;
document.writeln(`${typeof typeoffBoolean}`);
document.writeln("<br>");
const typeoffNumber = 100;
document.writeln(`${typeof typeoffNumber}`);
document.writeln("<br>");
const typeoffObject = {};
document.writeln(`${typeof typeoffObject}`);
document.writeln("<hr>");

