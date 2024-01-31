function outputMessage(message) {
    console.log(`The message is: ${message}`);
}

//That way we make things available from this module to other modules
module.exports = outputMessage;