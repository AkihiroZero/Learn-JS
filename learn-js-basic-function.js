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

//7). Optional Chaining

const chainingExample = {
    address:{
        region : "indonesia"
    }
};

let undefineChaining = chainingExample?.address?.country;
document.writeln(`${undefineChaining}`);
document.writeln("<hr>");

//8). For Loop

for (let forExample = 0; forExample < 10; forExample++) {
document.writeln("Its For Loops " + forExample);
document.writeln("<br>");
}
document.writeln("<hr>");


//9). While Loop
let whileExample = 0
while (whileExample < 10) {
    document.writeln(`Its While Loop ${whileExample}`);
    document.writeln("<br>");
    whileExample++;
}
document.writeln("<hr>");

//10). Do While Loop
let dowhileExample = 0;
do {
    document.writeln("Its Dowhile Loops" + dowhileExample);
    document.writeln("<br>");
    dowhileExample++
} while (dowhileExample < 10);
document.writeln("<hr>");

//11). Break Statement

let breakExample =0;
while(true){
    document.writeln("Brek to stop loops" + breakExample)
    document.writeln("<br>");
    breakExample++
    if(breakExample > 10){
        break;
    }
}
document.writeln("<hr>");

//12). Loop Label

labeli:
    for (let loop = 0; loop < 5; loop++) {
      labelj:
            for (let loop2 = 0; loop2 < 5; loop2++) {
                document.writeln(`${loop} - ${loop2}`)
                document.writeln("<br>");
            }     
    }
document.writeln("<hr>");

//13). For In (Object/Array Looping)

const forInExample = {
    String : "A String",
    Number : 199,
    boolean : true
}

for (const inStatement in forInExample) {
    document.writeln(`${inStatement} : ${forInExample[inStatement]}`)
    document.writeln("<br>");
}
document.writeln("<hr>");

//14)
