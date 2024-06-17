setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel dans le temps :

// pile d'appel
// ^
// |
// |                         [log]                   [log]  [log]             [log]
// |[st][st][st][st][log] ⟳ [taskB] ⟳                [taskA][taskD] ⟳        [taskC]
// +----0--------------------7ms---------------------500ms--------------------1000ms-----> temps
//                  E        B                       A       D                C

// File d'attente (0ms) : taskB
// File d'attente (7ms) :
// File d'attente (500ms) : taskA - taskD
// File d'attente (501ms) : taskD
// File d'attente (502ms) :
// File d'attente (1000ms) : taskC
// File d'attente (1001ms) :

// E B A D C


// coté C++ le navigateur (ou Node.js) exécute notre code
// dans une boucle
// do {
//    executeCallStack()
// } while(tasksToExecute);


// Jake Archibald (Google)
// In The Loop - JSConf Asia 2018
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
