function validate_email() {
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailid = (document.getElementById("emailAddr").value);

    if(mailid.match(mailformat)) {
        document.getElementById("emailAaddr").style.borderColor = "rgb(0,255,0)";
    }

    else {
        document.getElementById("message").style.display = "block"; 
        document.getElementById("emailAddr").style.borderColor = "hsl(354, 100%, 66%)";
    }
}

