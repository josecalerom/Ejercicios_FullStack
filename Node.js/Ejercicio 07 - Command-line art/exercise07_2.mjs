import figlet from "figlet";

function outputMessage(message) {
    console.log(figlet.textSync(message, {
        font: "Dancing Font",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }))
}

outputMessage("My message!!!");
