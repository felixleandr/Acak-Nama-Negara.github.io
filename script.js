
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
tambahScore = document.querySelector(".scores");


let correctWord, timer;

let tempScore = 0

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        } 

        localStorage.setItem("score", tempScore);
        alert(`Waktu habis! Skor kamu adalah ${tempScore}!`);
        window.location.href="leaderboard.html"
        clearInterval(timer)
      }, 1000);
    }

function scramble() {
  let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
  
}

const initGame = () => {
    initTimer(30);
    scramble()
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Masukkan jawaban untuk dicek !");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} adalah jawaban yang salah`);
    // alert(`Selamat! ${correctWord.toUpperCase()} adalah kata yang benar`);
    tempScore += 20
    tambahScore.innerText = tempScore
    scramble();
}

refreshBtn.addEventListener("click", scramble);
checkBtn.addEventListener("click", checkWord);
tambahScore.innerText = tempScore



function userRegister() {
  let inputUsername = document.getElementById("username").value;
  localStorage.setItem("username", inputUsername);

  if (!inputUsername){
    alert('Isi nama dulu ya')
  } else {
    window.location.href = "main.html"
  }

}
checkLocation()

function checkLocation() {
  console.log(window.location.href);
  if (window.location.href === "https://felixleandr.github.io/Acak-Nama-Negara.github.io/main.html") {
    let greetingsText = document.getElementById("greetings");
     let getUser = localStorage.getItem("username");
      greetingsText.innerText = getUser
  }
  initGame()
}



