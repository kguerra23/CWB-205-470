/*
    Name: Kaela Guerra
    Assignment: Topic 3 Assignment
    Date: 03/01/2021
    Class: CWB 205 470
    Description: Topic 3 content is added to my on-going website. Create function displayMessage(). Argument firstName is passed through
        the function. Afterwards, function displayMessage() sends an alert. function fruit1(), fruit2(), and fruit3() test if the 
        myFruit variable is equal to Watermelon, Apple, and Orange. Then they alert a response. Create function season() with argument mySeason
        passing through it. With if/else statement, user favorite season will be determined. Create function soda() with argument mySoda 
        passing through it. With switch statement, user favorite soda will be determined. If/Else statements use == condition to determine
        user input. 
*/

// argument firstName is passed into function displayMessage()
function displayMessage(firstName) {
    // alert box pops up with greeting
    alert("Hello " + firstName + ", welcome to my questionaire!");
}

// If Statement to find user favorite fruit
function fruit1(myFruit) {
    if (myFruit == "Watermelon") {
        alert("Mine too!");
    }
}
function fruit2(myFruit) {
    if (myFruit == "Apple") {
        alert("Sweet!")
    }
}
function fruit3(myFruit) {
    if (myFruit == "Orange") {
        alert("Cool!")
    }
}

// If/Else & Else/If Statement to find user favorite season
function season(mySeason) {
    if (mySeason == "Spring") {
        alert("If it was warmer, it'd be my favorite too");
        }
    else if (mySeason == "Summer") {
        alert("Mine too!");
    }
    else if (mySeason == "Autumn/Fall") {
        alert("Not too hot, not too cold");
    }
    else if (mySeason == "Winter") {
        alert("You must like the cold");
    }
    else {
        alert("Try again?");
    }
}

// Switch statement to find user favorite soda
function soda(mySoda) {
    switch (mySoda)
    {
    case "Root Beer":
        alert("Mine too!");
        break
    case "Sprite":
        alert("Sweet!");
        break
    default:
        alert("Nice!");
    }
}