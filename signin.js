function getCookie(key) {
    var val = "";
    var x = document.cookie;
    var y = x.split(";");
    for (var i in y) {
      var test = y[i].split("=");
      if (test[0].trim() === key) {
        return test[1];
      }}}
      function sign() {
        var em = document.getElementById("email");
        var passs1= document.getElementById("passs1");
        
        if (getCookie("e-mail") === em.value && getCookie("password")===passs1.value) {
            window.location.replace("exam.html")
        } else {
            document.body.children[0].children[1].children[10].innerHTML="!!E-mail or password isn't correct";
        }
      };