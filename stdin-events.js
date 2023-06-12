process.stdin.setEncoding("utf-8");

// process.stdin.on("data", (data) => console.log("1.", data));
// process.stdin.on("data", (data) => console.log("2.", data));

process.stdin.on("trigger", (data) => console.log(data));
process.stdin.emit("trigger", "This is a trigger called");
