const EventEmitter = require('events');
class My extends EventEmitter{
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson',{price:Math.random()*100})
    },3000)
  }
}
const geetMy = new My()
geetMy.addListener('newLesson', (res) => {
  if (res.price < 80) {
    console.log('yeak',res);
  }

})