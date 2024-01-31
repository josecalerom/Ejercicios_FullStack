// Our HTTP server sends an HTML response body.
// Replace the text in the HTML with your own message. Run the server and use your web browser to test your changes.

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200; //200 means successful response

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>This is my first HTML response body</h1><h2>This is another message</h2></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
