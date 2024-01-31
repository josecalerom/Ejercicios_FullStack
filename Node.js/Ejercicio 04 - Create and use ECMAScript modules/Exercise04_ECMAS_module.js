//We have to use .mjs type so node.js knows these are ECMAScript modules
//That way we can export and import using this particular syntax

function outputMessage(message) {
    console.log(`The message is: ${message}`);
}

//We're using the export keyword and we're specifying the default export -outputMessage-
export default outputMessage;