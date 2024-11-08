//conditional statements(if and else if)
//1.voting eligibility

age=18
if(age>=18){
    console.log("can vote")
}
else if(age<18){
    console.log("can not vote")
}
//output: can vote
//----------------------------------------------------------------
//2.traffic signal

color="yellow"
if(color=="green"){
    console.log("go")
}
else if(color=="yellow"){
    console.log("ready to go")
}
else if(color=="red"){
    console.log("stop")
}
else{
    console.log("invalid input")
}
//output: ready to go
//----------------------------------------------------------------
//3.speed

speed=24
if(speed>75){
    console.log("overspeed")
}
else if(speed>=25 && speed<=75){
    console.log("Normal")
}
else {
    console.log("under speed")
}
//output: under speed
//------------------------------------------------------------------
//4.license

age=20
if(age>=20){
    console.log("You can apply for an endorsement to drive a transport vehicle")
}
else if(age>=18 && age<20){
    console.log("You can apply for a license to drive a motorcycle with an engine capacity of more than 50cc")
}
else if(age>=16 && age<18){
    console.log("You can drive a motorcycle with an engine capacity of up to 50cc with the consent of a parent or guardian")
}
else{
    console.log("Don't touch the vehicles")
}
//output: You can apply for an endorsement to drive a transport vehicle