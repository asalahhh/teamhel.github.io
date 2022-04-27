let userinput = document.querySelector("[name='username']");
let ageinput = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (e) {
    let uservalid = false;
    let agevalid = false;
    if (userinput.value!==""&& userinput.value.length <=10) {
        uservalid = true;
    }
    if (ageinput.value !=="") {
        agevalid = true;
    }
    if (uservalid===false||agevalid===false) {
        e.preventDefault();
    }
    if (uservalid===false || agevalid===false)  {
        alert("please enter valid input");
    }
   
}