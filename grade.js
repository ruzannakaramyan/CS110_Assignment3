const prompt = require("prompt-sync")();
var givenGrade= prompt("Write your grade: ");

let letterGrade = "";
if (givenGrade < 60){
    letterGrade += "F"}
    else if(givenGrade >= 60 && givenGrade <= 62)
    {
        letterGrade += "D-"}
        else if(givenGrade >= 63 && givenGrade <= 66){
            letterGrade += "D"}
            else if(givenGrade >= 67 && givenGrade <= 69){
                letterGrade += "D+"}
                else if(givenGrade >= 70 && givenGrade <= 72){
                    letterGrade += "C-"}
                    else if(givenGrade >= 73 && givenGrade <= 76){
                        letterGrade += "C"}
                        else if(givenGrade >= 77 && givenGrade <= 79){
                            letterGrade += "C+"}
                            else if(givenGrade >= 80 && givenGrade <= 82){
                                letterGrade += "B-"}
                                else if(givenGrade >= 83 && givenGrade <= 86){
                                    letterGrade += "B"}
                                    else if(givenGrade >= 87 && givenGrade <= 89){
                                        letterGrade += "B+"}
                                        else if(givenGrade >= 90 && givenGrade <= 92){
                                            letterGrade += "A-"}
                                            else if(givenGrade >= 93 && givenGrade <= 96){
                                                letterGrade += "A"}
                                                else if(givenGrade >= 97){
                                                    letterGrade += "A+"}

const state = letterGrade;
switch (state){
    case "A+":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "A":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "A-":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "B+":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "B":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "B-":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "C+":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "C":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "C-":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "D+":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "D":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "D":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You passed!`);
        break;
    case "F":
        console.log(`Your grade is ${givenGrade} which corresponds to ${letterGrade}.You failed!`);
        break;
}
