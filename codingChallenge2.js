const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass/(markHeight * markHeight)
const johnBMI = johnMass/(johnHeight * johnHeight)

const markHigherBMI = markBMI > johnBMI

//console.log(markHigherBMI)

if(markBMI > johnBMI){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("John's BMI is higher than Mark's!")
}

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`)
}