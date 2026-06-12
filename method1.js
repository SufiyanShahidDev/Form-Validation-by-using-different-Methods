const submitBtn = document.getElementById("submitBtn");


function submitData() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let usernameElem = document.getElementById("username");
    let emailElem = document.getElementById("email");
    let phoneElem = document.getElementById("phone");
    let messageElem = document.getElementById("message");
    
    document.getElementById("error-user").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-phone").innerHTML = "";
    document.getElementById("error-message").innerHTML = "";

    usernameElem.style.border = "1px solid #959696";
    emailElem.style.border = "1px solid #959696";
    phoneElem.style.border = "1px solid #959696";
    messageElem.style.border = "1px solid #959696";
    
    let usernameRegex = /^[A-Za-z][A-Za-z\s]{2,29}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\+?[0-9]{10,15}$/;
    let messageRegex = /^(?=.*\S)[\s\S]{10,200}$/;
    
    let isValid = true;
    
    if (username === "") {
        document.getElementById("error-user").innerHTML = "Username is required";
        usernameElem.style.border = "1px solid red";
        isValid = false;
    } else if (!usernameRegex.test(username)) {
        document.getElementById("error-user").innerHTML = "Username must be 3 to 30 letters only";
        usernameElem.style.border = "1px solid red";
        isValid = false;
    }
    
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Email is required";
        emailElem.style.border = "1px solid red";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("error-email").innerHTML = "Enter a valid email address";
        emailElem.style.border = "1px solid red";
        isValid = false;
    }
    
    if (phone === "") {
        document.getElementById("error-phone").innerHTML = "Phone is required";
        phoneElem.style.border = "1px solid red";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("error-phone").innerHTML = "Enter a valid phone number";
        phoneElem.style.border = "1px solid red";
        isValid = false;
    }
    
    if (message === "") {
        document.getElementById("error-message").innerHTML = "Message is required";
        messageElem.style.border = "1px solid red";
        isValid = false;
    } else if (!messageRegex.test(message)) {
        document.getElementById("error-message").innerHTML = "Message must be 10 to 200 characters";
        messageElem.style.border = "1px solid red";
        isValid = false;
    }
    
    if (isValid) {
        Swal.fire({
            title: "Form has been Submitted Successfully!",
            icon: "success",
            draggable: true
        });
        
        console.log(username);
        console.log(email);
        console.log(phone);
        console.log(message);
        
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
}


submitBtn.addEventListener("click", submitData);