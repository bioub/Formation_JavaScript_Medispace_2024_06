function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  // Le thread est bloqué inutilement :
  while (debut + delay > Date.now()) {}

  cb();
}

setTimeoutSync(() => console.log("setTimeoutSync A"), 500);
setTimeoutSync(() => console.log("setTimeoutSync B"), 0);
setTimeoutSync(() => console.log("setTimeoutSync C"), 1000);
setTimeoutSync(() => console.log("setTimeoutSync D"), 500);

console.log("setTimeoutSync E");

// pile d'appel
// ^
// |                  [lg][lg]                      [lg]            [lg]
// |                  [cb][cb]                      [cb]            [cb]
// |[st XXXXXXXXXXXXXXXXX][st][st XXXXXXXXXXXXXXXXXXXXX][st XXXXXXXXXXX][log]
// +----0-------------500ms-------------------------1500ms----------2000ms-----> temps
//                    A   B                         C               D    E

function sleep(delay) {
  const debut = Date.now();

  // Le thread est bloqué inutilement :
  while (debut + delay > Date.now()) {}
}

sleep(500);
console.log("setTimeoutSync A");
sleep(0);
console.log("setTimeoutSync B");
sleep(1000);
console.log("setTimeoutSync C");
sleep(500);
console.log("setTimeoutSync D");

console.log("setTimeoutSync E");
