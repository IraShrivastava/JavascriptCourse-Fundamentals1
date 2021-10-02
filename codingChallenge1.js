const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass/(markHeight * markHeight)
const johnBMI = johnMass/(johnHeight * johnHeight)

const markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)