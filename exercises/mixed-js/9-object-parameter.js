/* ===== Passing objects as params ====== */

let myUser = { name: "John Doe" };

function subscribeUser(user) {
  user.subscribed = true;
}

subscribeUser(myUser);

// What does myUser look like after calling subscribeUser? Why?

myUser; // ???

