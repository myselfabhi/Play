function formsubmission(form){
    console.log("hello--", form);
    var name =
        document.forms.RegForm.Name.value;
    var phone =
        document.forms.RegForm.Phone.value;
    var email =
        document.forms.RegForm.Email.value;
    var passcode =
        document.forms.RegForm.Passcode.value;
    console.log("hello--2", name);

        var regName = /\d+$/g;    
        var regPhone=/^\d{10}$/;   
        var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 

        if (name == "" || regName.test(name)) {
            window.alert("Please enter your name properly.");
            name.focus();
            return false;
        }

        if (phone == "" || !regPhone.test(phone)) {
            alert("Please enter valid phone number.");
            phone.focus();
            return false;
        }

        if (email == "" || !regEmail.test(email)) {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

        if(password.length <6){
            alert("Password should be atleast 6 character long");
            password.focus();
            return false;
     
        }

        function pagePrint(form){
            document.getElementById("RegForm").innerHTML = Abhinav;
         }

        return true;
    } 

    formsubmission(form);
    
    

