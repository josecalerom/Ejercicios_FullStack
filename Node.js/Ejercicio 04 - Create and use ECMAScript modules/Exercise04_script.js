//We're importing the function from the other module
import outputMessage from "./Exercise04_ECMAS_module.js";

outputMessage("ECMAScript module message")


//If we use the type: module in package.json file we told node.js that all modules in this project are going to be ecmascript modules
// So we can use .js extension again with no problems
//If there's no package.json we need to use .mjs file type