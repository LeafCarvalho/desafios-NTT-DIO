var s = gets(); 

const remDup = s=> s.split("").map((c,i,o)=>(o.indexOf(c)==i)?c:"").join("")
console.log(remDup(s))