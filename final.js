function getCookie(key) {
    var val = "";
    var x = document.cookie;
    var y = x.split(";");
    for (var i in y) {
      var test = y[i].split("=");
      if (test[0].trim() === key) {
        return test[1];
      }}}
(function(){
    var sc= document.getElementById("score");
    sc.innerHTML=`<div class="res"> Welldone ${getCookie("fname")}${getCookie("lname")}<br>your score is ${getCookie("score")}/5`
}())
   
