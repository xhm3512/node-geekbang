const playerAction = process.argv[process.argv.length - 1]
console.log(444, playerAction);
const random = Math.random() * 3;
if (random < 1) {
  var computerAction='rock'
} else if (random > 2) {
  var computerAction='scissor'
} else {
  var computerAction='paper'
}
if (playerAction === computerAction) { //平局
  console.log('平局');
} else if (playerAction==='rock' && computerAction==='scissor' || playerAction==='scissor' && computerAction==='paper'  ||playerAction==='paper' && computerAction==='rock') {
  console.log('你赢了');
} else {
  console.log('你输了');
}