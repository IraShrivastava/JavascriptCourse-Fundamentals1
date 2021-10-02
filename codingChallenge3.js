const dolphin1 = 96;
const dolphin2 = 108;
const dolphin3 = 89;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;
let doplhinAvg;
let koalasAvg;

doplhinAvg = (dolphin1+dolphin2+dolphin3)/3;
koalasAvg = (koalas1+koalas2+koalas3)/3

console.log(doplhinAvg)
console.log(koalasAvg)
if(doplhinAvg > koalasAvg){
    console.log("Dolphins win!")
} else if( doplhinAvg < koalasAvg){
    console.log("Koalas win!")
} else if( doplhinAvg === koalasAvg){
    console.log("its a draw")
}