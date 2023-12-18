
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputMessage=document.getElementById("textarea");

inputName.addEventListener("blur", (event) => {
  name = inputName.value.trim();
  var regexName = /^[A-Za-z\s]+$/;
  var formatedName = document.querySelector(".format-example-name");

  if (!regexName.test(name)) {
    alert("Please enter a valid name.");
    formatedName.classList.add("block");
    formatedName.classList.add("invalid");
  } else {
    formatedName.classList.remove("block");
    formatedName.classList.remove("invalid");
  }
});

inputEmail.addEventListener("blur", (event) => {
  email = inputEmail.value.trim();
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var formatedEmail = document.querySelector(".format-example-email");

  if (email !== "" && !regexEmail.test(email)) {
    alert("Please enter a correct email.");
    formatedEmail.classList.add("block");
    formatedEmail.classList.add("invalid");
  } else {
    formatedEmail.classList.remove("block");
    formatedEmail.classList.remove("invalid");
  }
});

inputMessage.addEventListener("blur",(event)=>{
    var message=inputMessage.value.trim();
    if (message.length<20){
        alert("add more text");
    
    }
})

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();


   var name =inputName.value.trim();
   var email=inputEmail.value.trim()
    var subject = document.getElementById("subject").value;
    var message = inputMessage.value.trim();

    
    var regexName = /^[A-Za-z\s]+$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
  var formatedName = document.querySelector(".format-example-name");
  var formatedEmail = document.querySelector(".format-example-email");
    if(!regexName.test(name)){
        alert("correct name before submitting");
        formatedName.classList.add("block");
        formatedName.classList.add("invlid");
        return;
        
    }

    if (email !== "" && !regexEmail.test(email)) {
        alert("Correct email before submitting");
        formatedEmail.classList.add("block");
        formatedEmail.classList.add("invalid");
        return; 
      }

      if (message.length<20 && message!==""){
        alert("add text before submitting");
        return;
      }
    
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("textarea").value = "";
});