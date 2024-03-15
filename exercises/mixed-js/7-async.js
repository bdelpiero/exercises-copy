/* ===== Async calls ====== */

function getNumber() {
  return 7;
}

async function fetchNumber() {
  return 7;
}

function resolveNumber() {
  return Promise.resolve(7);
}

getNumber(); // ???
fetchNumber(); // ???
resolveNumber(); // ???