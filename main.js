
//////////////////////validation/////////////////////////
function Register() {
    var fnm = document.getElementById("fname");
    var lnm = document.getElementById("lname");
    var em = document.getElementById("email");
    var passs1= document.getElementById("passs1");
    var passs2 = document.getElementById("passs2");
   
     if (
      fnm.value == "" ||
      lnm.value == "" ||
      em.value == "" ||
      passs1.value == ""||
      passs2.value == ""
    ){
       {document.body.children[0].children[1].children[5].innerText="!please enter this field";}
       {document.body.children[0].children[1].children[10].innerText="!please enter this field";} 
       {document.body.children[0].children[1].children[15].innerText="!please enter this field";}
       {document.body.children[0].children[1].children[20].innerText="!please enter this field";}
       {document.body.children[0].children[0].children[26].innerText="!please enter this field";}  
       
    
          }
     else {
   
        document.body.children[0].children[1].children[5].innerText="";
        document.body.children[0].children[1].children[10].innerText="";
        document.body.children[0].children[1].children[15].innerText="";
        document.body.children[0].children[1].children[20].innerText="";
        document.body.children[0].children[1].children[26].innerText="";
         

        function setcookie(key, value, expdate) {
            var date = new Date(expdate);
          
            document.cookie = `${key}=${value}; expires=${date}`;
          }
        setcookie("fname", fnm.value, "4/10/2022");
        setcookie("lname", lnm.value, "4/10/2022");
        setcookie("e-mail", em.value, "4/10/2022");
        setcookie("password", passs1.value, "4/10/2022");
        setcookie("repass", passs2.value, "4/10/2022");
      
        window.location.replace("signin.html");}}
       
          
        
       

function fname(inputtxt) {
    var rnm = /^([a-z]+ ?){1,3}$/i;
    var innum = inputtxt.value;
    var res = rnm.test(innum);
    if (res == 0) {
        document.body.children[0].children[1].children[5].innerText="!The string must contain alphabetical characters only";
        inputtxt.value = "";
    
      }
    else { document.body.children[0].children[1].children[5].innerText="";   }
   
  }
  function lname(inputtxt) {
    var rnm = /^([a-z]+ ?){1,3}$/i;
    var innum = inputtxt.value;
    var res = rnm.test(innum);
    if (res == 0) {
        document.body.children[0].children[1].children[10].innerText="!The string must contain alphabetical characters only";
        inputtxt.value = "";
    
      }
    else { document.body.children[0].children[1].children[10].innerText="";   }
   
  }
  function email(inputtxt) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var innum = inputtxt.value;
    var res = mailformat.test(innum);
    if (res == 0) {
        document.body.children[0].children[1].children[15].innerText="please enter only valid E-mail";
        inputtxt.value = "";
    
      }
    else { document.body.children[0].children[1].children[15].innerText=""; }
   
  }

  function pass1(inputtxt){
var pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
var inpass1=inputtxt.value;
var res=pass.test(inpass1);

if (res == 0) {
    document.body.children[0].children[1].children[20].innerText="The string must contain at least 1 lowercase,uppercase alphabetical,numeric character and 8 characters or longer";
    inputtxt.value = "";

  }
else { document.body.children[0].children[1].children[20].innerText="";}

}

  function pass2(inputtxt){
    var inpass1=document.getElementById("passs1");
    var inpass2=inputtxt.value;
    
    if (inpass1.value!== inpass2){ document.body.children[0].children[1].children[26].innerText="r-enter password doesn't match";
    inputtxt.value = "";}
      }
      
      ////////////////end of validation////////////////////



     
