// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'I come from p1 object')
// })
// const p2 = new Promise((resolve, reject) => {
//   resolve(p1)
// })

// p2.then((value) => {
//   console.log(value, 'success');
// }).catch(err => {
//   console.log( err, 'catch' )
// }).finally(() => {
//   console.log( 'finally' )
// })


const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'I come from p1 object')
})

p1.then(value => {
  console.log( 'value' )
  return 'come from then 一'
}).then(value => {
  console.log( value )
  console.log( 'then 二' )
})