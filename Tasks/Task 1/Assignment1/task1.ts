let englishMarks = 50
let urduMarks = 50
let averageMarks = (englishMarks + urduMarks) / 2
console.log("Your average Percentage is",averageMarks)
if(averageMarks >= 80){
    console.log("You scored A*")
}
else if(averageMarks >= 70 && averageMarks < 80){
    console.log("You scored B")
}
else if(averageMarks < 60){
    console.log("You scored F (Failed)")
}