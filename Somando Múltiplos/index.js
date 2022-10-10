let A = parseInt(gets()), B= parseInt(gets());

let calculo1 = B / A
let result = calculo1 * 100
let result2 = result - 100

if(result2 % 1 === 0){
  console.log(`${result2}%`)
} else {
  console.log(`${result2.toFixed(0) - 1}%`)
}