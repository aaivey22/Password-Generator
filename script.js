// These are variables and their assigned strings needed to create the random password
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loCase = "abcdefghijklmnopqrstuvwxyz";
var figures = "0123456789";
var special = `!#$%&'()*+,-./:;<=>?@[\\]"^_\`{|}~`;

// This is the variable that holds the radnom-password results
var password = "";

// This button variable refers to the submit button element in the html
var button = document.getElementById('submit');

// Here is an event listener that fires the generate function when the button is clicked by the user
button.addEventListener('click', generate);

// This is a helper function for reuse and the parameters are the placeholders: type and selectedCase
// The helper function 'addCase' and it's paramters are empty until the user choices made and assigned in the selectedCase avriable if statements
// Retun concats the addCase parameters
function addCase(type, selectedCase) { 
    return selectedCase + type;
}

// The generate function is fired by the above eventListener and calls the empty password variable to be filled with the 
// pwrdLength variable results from the user's response to the prompt
function generate() {
    password = "";
    var pwrdLength = prompt("password length? (between 8 and 128)");
    if ((pwrdLength < 8) || (pwrdLength > 128)) { // This if statement contains the parameters for the password length
        alert("please enter a valid number"); // An alert will notify the user if their choice did not meet the parameters
        generate(); // The function will re-fire for the user to make a decision that meets the parameters
        return; // Return stops the function after receiving valid user input
    }

    // These variables store the user's confirmation/disapproval for the use of specific password characters to be generated
    var upChoice = confirm("press ok for upper case"); // User's choices are stored as boolean values
    var loChoice = confirm("press ok for lower case");
    var figChoice = confirm("press ok for numbers");
    var specialChoice = confirm("press ok if you want special characters");
    
    // The selectedCase variable value will hold the findings of the each if statement based on the boolean values of the user choices
    var selectedCase = "";
    if (upChoice === true) { // If the user clicks 'ok', it will return a boolean value of 'true' and the variable's respective string is added to selectedCase string
        selectedCase = addCase(upCase, selectedCase); // The helper function 'addCase' and it's paramters again: type, selectedCase
    }

    if (loChoice === true) {
        selectedCase = addCase(loCase, selectedCase);
    }

    if (figChoice === true) {
        selectedCase = addCase(figures, selectedCase);
    }

    if (specialChoice === true) {
        selectedCase = addCase(special, selectedCase);
    }


    for (var i = 0; i <= pwrdLength; i++) { // This for loop will iterate as many times as designated by the pwrdlength variable
        // Password is called and concatenated with the selectedCase string where a golbal math object is then used to select a random character within the specified index string
        password = password + selectedCase.charAt(Math.floor((Math.random() * selectedCase.length) - 1));
    }
    selectedCase = ""; // Reset the selectedCase variable to empty
    
    // The getElementById method identifies the input element by it's id within the document object and changes it's value to the password value within in the input field.
    document.getElementById("yourSecurePassword").value = password;
}