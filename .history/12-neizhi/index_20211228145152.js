const EventEmitter = require('events');
class My extends EventEmitter{
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson',{price:Math.random()*100})
    })
  }
}
const geetMy = new My()
geetMy.addListener('newLesson', (res) => {
  console.log('yeak',res);
})