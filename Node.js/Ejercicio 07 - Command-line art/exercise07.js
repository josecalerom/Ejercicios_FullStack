//Create a new Node.js project and install the figlet package (https://www.npmjs.com/package/figlet).
//Write a script that uses the function from this package to output some text based art
//(the figlet package README has a 'Quick Start' section).
//Run the script with Node.js.

const figlet = require("figlet");

function outputMessage(message) {
    console.log(figlet.textSync(message, {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
      }))
}

outputMessage("My message!!!");
