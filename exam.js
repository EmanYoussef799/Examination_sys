/////////////======Progress bar=======///////////

(function () {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("mybar");
    var width = 1;
    var id = setInterval(frame, 300);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        submit();
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
})();

////////////======Constractor Function=========////////

var Exam = function (question, choices, rightAnswer) {
  this.question = question;
  this.choices = choices;
  this.rightAnswer = rightAnswer;
};

var q1 = new Exam(
  "He......playing football,yesterday.",
  ["was", "is", "are", "were"],
  "was"
);
var q2 = new Exam(
  "She......playing piano,now.",
  ["is", "was", "are", "were"],
  "is"
);
var q3 = new Exam(
  "They......playing vollyball,yesterday.",
  ["were", "is", "are", "was"],
  "were"
);
var q4 = new Exam(
  "We......studing english,now.",
  ["were", "was", "are", "is"],
  "are"
);
var q5 = new Exam(
  "It is........,now",
  ["rain", "rained", "run", "raining"],
  "raining"
);
var arrOfQues = [q1, q2, q3, q4, q5];
var arrOfRightAnswer = [];
var randomQues = [];
var i = 0;
var arrOfUserAnswers = [];
var markedQuestions = [];

////////////=========random==========/////////////

while (randomQues.length < 5) {
  var index = Math.floor(Math.random() * 5);
  if (randomQues.indexOf(index) === -1) randomQues.push(index);
}
///////==========Display random questions & choices=====//////////
var i = 0;
document.querySelector(".question").textContent =
  i + 1 + ". " + arrOfQues[randomQues[i]].question;
for (var j = 0; j < arrOfQues[randomQues[i]].choices.length; j++) {
  document.querySelector("#ch-" + j).nextSibling.textContent =
    arrOfQues[randomQues[i]].choices[j];
}
//////////=====Pushing right answer=====////////////////

for (var z = 0; z < randomQues.length; z++) {
  arrOfRightAnswer.push(arrOfQues[randomQues[z]].rightAnswer);
}

/////////======Next btn========///////////////

document.querySelector("#next").addEventListener("click", function () {
  for (var j = 0; j < 4; j++) {
    var x =
    document.querySelectorAll("input[type=radio]")[j].nextSibling.textContent;
    document.querySelectorAll("input[type=radio]")[j].checked = false;
  }

  if (i < 4) {
    i++;
    document.querySelector(".question").textContent =
      i + 1 + ". " + arrOfQues[randomQues[i]].question;
    for (var j = 0; j < arrOfQues[randomQues[i]].choices.length; j++) {
      document.querySelector("#ch-" + j).nextSibling.textContent =
        arrOfQues[randomQues[i]].choices[j];
    }
  }
  checkedAnswer();
});

/////////======Previous btn========///////////////

document.querySelector("#previous").addEventListener("click", function () {
  for (var j = 0; j < 4; j++) {
    var x =
      document.querySelectorAll("input[type=radio]")[j].nextSibling.textContent;
    document.querySelectorAll("input[type=radio]")[j].checked = false;
  }

  if (i > 0) {
    i--;
    document.querySelector(".question").textContent =
      i + 1 + ". " + arrOfQues[randomQues[i]].question;
    for (var j = 0; j < arrOfQues[randomQues[i]].choices.length; j++) {
      document.querySelector("#ch-" + j).nextSibling.textContent =
        arrOfQues[randomQues[i]].choices[j];
    }
  }
  checkedAnswer();
});

/////////======Mark btn========///////////////

document.querySelector("#mark").addEventListener("click", function () {
  if (markedQuestions.indexOf(i) === -1) {
    markedQuestions.push(i);
    var html = `<div class="marked${i}" data-name=${i} > Question  ${
      i + 1
    } </div> <br>`;
    document.querySelector(".qu").insertAdjacentHTML("beforeend", html);
    var mar = document.querySelector(`.marked${i}`);
    mar.addEventListener("click", function (e) {
      console.log(e);
      var x = parseInt(e.target.dataset.name);
      i = x;
      document.querySelector(".question").textContent =
        i + 1 + ". " + arrOfQues[randomQues[i]].question;
      for (var j = 0; j < arrOfQues[randomQues[i]].choices.length; j++) {
        document.querySelector("#ch-" + j).nextSibling.textContent =
          arrOfQues[randomQues[i]].choices[j];
      }

      checkedAnswer();
    });
  }
});



///////////////========checked choices=======////////////
function checkedAnswer() {
  if (arrOfUserAnswers[i] !== -1) {
    var chosen = arrOfUserAnswers[i];
    for (var j = 0; j < 4; j++) {
      var x =
        document.querySelectorAll("input[type=radio]")[j].nextSibling
          .textContent;
      if (x === chosen) {
        document.querySelectorAll("input[type=radio]")[j].checked = true;
      }
    }
  }
}

//////////////////========pushing UserAnswers========//////////

function chooseAnswer(event) {
  userAnswer = event.target.nextSibling.textContent;
  arrOfUserAnswers[i] = userAnswer;
  console.log(arrOfUserAnswers);
  console.log(userAnswer);
}

///////////////========Score========//////////////

var score = 0;
function submit() {
  for (var i = 0; i < arrOfUserAnswers.length; i++) {
    if (arrOfUserAnswers[i] == arrOfRightAnswer[i]) {
      score += 1;
    }
  }
  function setcookie(key, value, expdate) {
    var date = new Date(expdate);

    document.cookie = `${key}=${value}; expires=${date}`;
  }
  setcookie("score", score, "4/10/2022");
  window.location.replace("final.html");
  console.log(score);
}
