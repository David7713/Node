import { createServer } from "http"; // Import the createServer function from the http module

// Create and assign the server to the 'server' variable
const server = createServer((req, res) => {
    // Commented out JSON response example
    // Sets the response header to indicate JSON content type and sends a JSON response
    // res.writeHead(200, {
    //     "Content-Type": "application/json"
    // });
    // res.end(JSON.stringify({
    //     name: "Davit"
    // }));

    // Check if the request URL is '/hello'
    if (req.url === "/hello") {
        res.writeHead(200, { // Set response header to indicate plain text content type
            "Content-Type": "text/plain"
        });
        res.end("hello"); // Send the response with the text "hello"
    } else {
        res.writeHead(200, { // Set response header to indicate plain text content type
            "Content-Type": "text/plain"
        });
        res.end("bye"); // Send the response with the text "bye"
    }
});

// Start the server and have it listen on port 4001
server.listen(4001);

console.log("Server is running on port 4001"); // Log message to indicate the server is running
