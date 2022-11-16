//1). Comment
// Example Comment

/*2). Paragraph Comment
 Another Example Comment
 */

//3). Basic show data type string
document.writeln("String using script src");
document.writeln("<br>");
document.writeln('String using script src single quotation mark');
document.writeln("<hr>");

//4). Basic show data type number
document.writeln(100);
document.writeln("<br>");
document.writeln(100.123);
document.writeln("<hr>");
document.writeln(0b11111010);
 
//5). Basic show data type boolean
document.writeln(true); //true condition
document.writeln("<br>");
document.writeln(false); //false condition
document.writeln("<hr>");

//6). Double String shows/string concenate
document.writeln("Double :" + "String");
document.writeln("<br>");
document.writeln('Multi' + 'triple' + 'string'); 
document.writeln("<hr>");

//7). Escape sequence
document.write("\n Enter \n Sequence");
document.writeln("<br>");
document.write("\\Slash \\Sequence");
document.writeln("<br>");
document.write("\"Two Qutation Mark\"");
document.writeln("<br>");
document.write("'Single Qutation Mark'");
document.writeln("<hr>");

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
document.writeln("<hr>");

//9). Console

console.debug("This is debug console");
console.info("This is console info");
console.warn("This is console warn");
console.error("This is cosole error");

//10). String Template

const string = "Akihiro Zero";
const string2 = "Overpowered";
const string3 = "Anime Character";
const template = `Name : ${string} ${string2} ${string3}`;
document.writeln(template);
document.writeln("<br>");

const sample = "Zahro Ali Marzukah";
const sampleValue = 90;
const template2 = `Test Name: ${sample}, passes : ${sampleValue > 75}`;
document.writeln(template2);
document.writeln("<hr>");

//11). Multiline String

let multiLineString = `
Sample,
Multiple, 
Line,
String,
`;
document.writeln("<pre>");
document.writeln(multiLineString);
document.writeln("</pre>"); 
document.writeln("<hr>");

//12). Data Type Array

let emptyArray = [];
    //insert data
emptyArray.push("Filled");
emptyArray.push("Insert", "Data","Number",50);
let namedArray = ["Name","Class","Data","String"];

console.table(emptyArray);
console.table(namedArray);

console.info(namedArray[1]);
console.info(namedArray[2]);

namedArray[3] = "Integer";
console.table(namedArray);

delete namedArray[0];
console.table(namedArray);

namedArray.push(["Inserted","Another","Arrays",true,255]);
console.table(namedArray);

//13). Data Type Object

const emptyObject = {};
const filledObject= {
    object : "an object",
    "string" : "a string",
    99 : 99,
    false : true
}
    //Insert data
emptyObject["Object"] = ["Test Object"];
emptyObject["String"] = ["Test String"];
emptyObject["Integer"] = [99];
emptyObject["Boolean"] = [true];
console.table(emptyObject);
console.table(filledObject);
console.info(`Changed Object : ${emptyObject.Object}`)

//14). Alert, Prompt And Confirm
    
    //Alert
alert("Welcome To Basic Show Data");

    //Prompt
const promptExample = prompt("Its a prompt pop up fill something here");
alert (`Hello ${promptExample}`);

    //Confirm
const confirmExample = confirm("its confirm pop up press the button");
    if(confirmExample){
        alert("Ok button pressed");
    }else{
        alert("cancel button pressed");
    }

//15). Undefined
    let undefineExample;
    if(undefineExample === undefined){
        document.writeln("Undefined Data Example");
        document.writeln("<br>");
    }
    else{
        document.writeln("Defined Data");
        document.writeln("<br>");
    }

    const undefineExamples = ["Array0","Array1"];
        if(undefineExamples[2] === undefined){
            console.info("ARRAY UNDEFINED");
        }

//16). Null

    const nullExample = null;
    if(nullExample === undefined){
        document.writeln("Undefined"); 
    }else if (nullExample === null){
        document.writeln("Its a Null Example");
        document.writeln("<br>");
    }

