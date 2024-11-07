//Print the grades using switch case
marks=70
switch(true){
    case (marks>=90 && marks<100):
        console.log(`${marks} marks and grade is A+`)
        break
    case (marks>=80 && marks<=89):
        console.log(`${marks} marks and grade is A`)
        break
    case (marks>=70 && marks<=79):
        console.log(`${marks} marks and grade is B+`)
        break
    case (marks>=60 && marks<=69):
        console.log(`${marks} marks and grade is B`)
        break
    case (marks>=50 && marks<=59):
        console.log(`${marks} marks and grade is C`)
        break
    case (marks>=35 && marks<=49):
        console.log(`${marks} marks and grade is C`)
        break
    default:
        console.log(`${marks} marks and grade is F`)
}
//output: 70 marks and grade is B+
//------------------------------------------------------------------------------------
// print the months using switch case
  month=6
  switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("Septerber")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("invalid number")
  }
   //output: June