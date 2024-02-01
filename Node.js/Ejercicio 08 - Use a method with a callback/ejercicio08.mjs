import * as fs from "node:fs";

const fileContent = new Uint8Array(Buffer.from("This is the string file content in exercise 08."));

fs.writeFile("new-file.txt", fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("The file has been saved!");
});

//Then we can read the file content
fs.readFile("new-file.txt", { encoding: "utf-8" }, function(error, data) {
    if(error){
        console.error(error);
        return;
    }
    console.log(data);
})
