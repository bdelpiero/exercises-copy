/* ===== Stop! Wait a minute ====== */

// Question: In which sequence are the messages printed? Explain

console.log("Hello");

setTimeout(() => {
  console.log("world!");
}, 0);

console.log("Have a nice day!");