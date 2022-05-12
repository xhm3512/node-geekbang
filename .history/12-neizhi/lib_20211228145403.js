const EventEmitter = require('events');
class My extends EventEmitter{
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson',{price:Math.random()*100})
    },3000)
  }
}
// const geetMy = new My()
module.exports = My;
