const geetMy=require('./lib')
geetMy.addListener('newLesson', (res) => {
  if (res.price < 80) {
    console.log('yeak',res);
  }

})