
  console.log("........Q  -1............")
var membership = "standard"


    if(membership == "basic"){
       console.log("Access to only free books.") 
    }
    else if(membership == "standard"){
        console.log("Access to free books and discounted paid books.")
    }
    else if(membership == "premium"){
        console.log("Access to all books, including exclusive content.")
    }
else{
    console.log("Invalid membership. please login")
}
console.log(membership);


console.log("..............Q -2....................")  

var amount = 1000;

var mumbership = "regular"
if(amount >=0 && amount <= 100){
    console.log("No discount")
}
else if (amount >= 100 && amount <=500){
    console.log("5% discount")
}
else if (amount > 500){
    console.log("10% discount")
}
else{
    console.log("Invalid amount")
}
var mumbership = "VIP"
if(amount >=0 && amount < 100){
   console.log("10% discount")
}
else if(amount >=100 && amount <=500){
    console.log("15% discount")
}
else if (amount > 500){
    console.log("20% discount")
}
else{
    console.log("Invalid amount")
}

  
console.log("............Q- 3..................")

var GPA = 2.7;
var student = 1

 if(GPA >= 0 && GPA <= 2.5){
    console.log("Community Service Scholarship")
}
else if (GPA > 2.5 && GPA < 3){
    console.log("Leadership Scholarship")
}
else if (GPA >= 3 && GPA <= 4){
    console.log(" Merit-Based Scholarship")
}
else{
    console.log("No Scholarship")
}


   
console.log("............Q- 4................")
var age = 40;
var price =15
if(price >0 && price <= 12){
   console.log("50% discount")
}
else if(price >12 && price >15){
    console.log("30% discount")
}
else {
    console.log("Invalid")
}
// var age = 55;
if((age >0 && age >= 12)&& age >65 && age <= 100){
    console.log("50% discount")
}
else if(age >12 && age < 65){
    console.log("30% discount")
}
else {
    console.log("Invalid")
}


console.log(".............Q -5...........")
var age = 20;
var numbers = 101;
var email = "user@5gemail.com"
if(age >=18 && age < 100){
    console.log("Your Eligible")
}
else{
    console.log( "Not Eligible , user must be 18 years or older to register")
}

if( numbers >= 0 && numbers <= 100 ){
    console.log("Your registration is completed")
}
else {
    console.log("The event allows a maximum of 100 participants ")
}
if (email ){
    console.log("The user must provide a valid email address")
}
else{
    console.log("Your email is wrong , please provid valid email")
}

     //Q -3
// console.log("...............Q-3................")
// var studentgpa = 7.8; "Merit-Based Scholarship";
// var studentgpa = "extracurricular activities";
// var studentgpa = "community service hours";
// if (studentgpa ){
//     console.log("Requires a GPA of 3.5 or higher")
// }
// else if(studentgpa){
//     console.log("GPA of 3.0 or higher and you should  have two extracurricular activities")
// }
// else if(studentgpa){
//     console.log("Requires 100 or more hours of community service and a GPA of 2.5 or higher")
// }
// else{
//     console.log("Invalid")
// }
// console.log(studentgpa)
// let gpa = 3.6; 
// let extracurricularActivities = 3; 
// let communityServiceHours = 120; 
// let meritScholarshipEligible = false;
// let leadershipScholarshipEligible = false;
// let communityServiceScholarshipEligible = false;
// if (gpa >= 3.5) {
//     meritScholarshipEligible = true;
// }
// if (gpa >= 3.0 && extracurricularActivities >= 2) {
//     leadershipScholarshipEligible = true;
// }
// if (gpa >= 2.5 && communityServiceHours >= 100) {
//     communityServiceScholarshipEligible = true;
// }
// if (meritScholarshipEligible || leadershipScholarshipEligible || communityServiceScholarshipEligible) {
//     console.log("The student is eligible for the following scholarships:");
//     if (meritScholarshipEligible) {
//         console.log("- Merit-Based Scholarship");
//     }
//     if (leadershipScholarshipEligible) {
//         console.log("- Leadership Scholarship");
//     }
//     if (communityServiceScholarshipEligible) {
//         console.log("- Community Service Scholarship");
//     }
// } else {
//     console.log("The student is not eligible for any scholarships.");
// }
