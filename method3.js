let contactForm = document.getElementById("contactForm");


function submitHandler(e) {
    try {
        e.preventDefault();
        
        let usernameElem = document.getElementById("username");
        let emailElem = document.getElementById("email");
        let phoneElem = document.getElementById("phone");
        let messageElem = document.getElementById("message");
        
        let username = usernameElem.value.trim();
        let email = emailElem.value.trim();
        let phone = phoneElem.value.trim();
        let message = messageElem.value.trim();
        
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
        let errorMessage = "";
        
        // Username
        if (username === "") {
            document.getElementById("error-user").innerHTML = "Username is required";
            usernameElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Username is required";
        } else if (!usernameRegex.test(username)) {
            document.getElementById("error-user").innerHTML = "Username must be 3 to 30 letters only";
            usernameElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Username must be 3 to 30 letters only";
        }
        
        // Email
        if (email === "") {
            document.getElementById("error-email").innerHTML = "Email is required";
            emailElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Email is required";
        } else if (!emailRegex.test(email)) {
            document.getElementById("error-email").innerHTML = "Enter a valid email address";
            emailElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Enter a valid email address";
        }
        
        // Phone
        if (phone === "") {
            document.getElementById("error-phone").innerHTML = "Phone is required";
            phoneElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Phone is required";
        } else if (!phoneRegex.test(phone)) {
            document.getElementById("error-phone").innerHTML = "Enter a valid phone number";
            phoneElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Enter a valid phone number";
        }
        
        // Message
        if (message === "") {
            document.getElementById("error-message").innerHTML = "Message is required";
            messageElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Message is required";
        } else if (!messageRegex.test(message)) {
            document.getElementById("error-message").innerHTML = "Message must be 10 to 200 characters";
            messageElem.style.border = "1px solid red";
            isValid = false;
            if (!errorMessage) errorMessage = "Message must be 10 to 200 characters";
        }
        
        if (!isValid) {
            throw new Error(errorMessage);
        }
        
        Swal.fire({
            title: "Form has been Submitted Successfully!",
            icon: "success",
            draggable: true
        });
        
        console.log(username);
        console.log(email);
        console.log(phone);
        console.log(message);
        
        usernameElem.value = "";
        emailElem.value = "";
        phoneElem.value = "";
        messageElem.value = "";
    } catch (err) {
        console.log("error -->", err);
        Swal.fire({
            title: "Validation Error",
            text: err.message,
            icon: "error"
        });
    }
}

    contactForm.addEventListener("submit", submitHandler);