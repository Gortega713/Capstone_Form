/*
    Author: Gabriel Ortega
    Date: 8.20.18

    Filename: form.js
*/

"use strict"

var formValidity = false;

// Function to validate form on submit

function validateForm(evt) {

    // Stops the form from being submitted and going to results page (results.html)
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validatePhoneNumber();
    validateRequired();

}

// Function to validate required fields

function validateRequired() {
    var inputElements = document.querySelectorAll("#basciFieldset input");
    var errorDiv = document.getElementById("errorDiv");
    var fieldsetValidity = true;
    var elementLength = inputElements.length;
    var currentElement = null;

    try {
        // Loop through all of the input elements and set "[i]" to the current element (which is currently null)
        for (var i = 0; i < elementLength; i++) {
            currentElement = inputElements[i];

            // Test for blank fields
            if (currentElement.value === "") {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;

            } else {
                errorDiv.style.display = "none";
                currentElement.style.border = "1px solid black";
                currentElement.style.background = "white";
            }
        }

        // Throw the message if there are fieldsets which are invalid/empty (fieldsetValidity is set to "false")
        if (fieldsetValidity === false) {
            throw "Please fill in all fields"
        } else {
            formValidity = true;
            fieldsetValidity = true;
        }
    } catch (err) {
        errorDiv.innerHTML = err;
        errorDiv.style.display = "block";
        errorDiv.style.color = "red";
    }
}

// Function to validate phone number_format
function validatePhoneNumber() {
    var phoneElement = document.getElementById("phoneInput");
    var errorDiv = document.getElementById("errorDiv");
    var fieldsetValidity = true;
    var lettersInPhoneNumber = /[A-Za-z]/ig;
    var phoneElement = document.getElementById("phoneInput");

    try {
        // Test for letters inside of the phone number field and if it's blank
        if (phoneElement.value !== "" && lettersInPhoneNumber.test(phoneElement) === true) {
            phoneElement.style.border = "1px solid red";
            fieldsetValidity = false;
        } else if (phoneElement.value === "") {
            phoneElement.style.border = "1px solid red";
            fieldsetValidity = false;
        } else {
            phoneElement.style.border = "1px solid black";
            phoneElement.style.background = "white";
        }

        if (fieldsetValidity === false) {
            formValidity = false;
            throw "Phone Number cannot have a letter in it"
        } else {
            formValidity = true;
            fieldsetValidity = true;
        }
    } catch (err) {
        errorDiv.innerHTML = err;
        errorDiv.style.display = "block";
        errorDiv.style.color = "red";
    }
}

// Function to validate Credit Card Information 

//function validate ccInfo() {
//    
//}

// Function to create all event listeners

function createEventListeners() {

    // Submits the form on the submit event
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

// Event listener for when the page loads
window.addEventListener("load", createEventListeners);
