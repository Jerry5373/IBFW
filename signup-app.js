let messageEL = document.getElementById("message-el")


function show(){
    var x = document.getElementById("password");
    var xa = document.getElementById("confirm-password")
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }

    if (xa.type === "password") {
        xa.type = "text";
    } 
    else {
        xa.type = "password";
    }
}

function signup() {
    var x = document.getElementById("password");
    var xa = document.getElementById("confirm-password")
    if (x.value === xa.value) {
        messageEL.textContent = "Password Matched"
    }

    else {
        messageEL.textContent = "Password Mismatched (Check again)"
    }
}



