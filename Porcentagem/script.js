function calcPct(n1, n2){
    return (n2/n1)*100
}

let x = 25
let y = 10
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)
