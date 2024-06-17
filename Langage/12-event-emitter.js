const { EventEmitter } = require('events')

const events = new EventEmitter();


events.addListener('click', () => {
  console.log('click');
});

events.emit('click');

console.log('FIN');
