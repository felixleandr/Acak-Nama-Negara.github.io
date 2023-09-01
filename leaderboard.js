let inputan = { username: "tebakkata", score: 150 }
let idUser = localStorage.getItem("username");
let scoreUser = localStorage.getItem("score");
inputan.username = idUser
inputan.score = scoreUser

let dbLeadboard = [
    { username: "TasTasTas", score: 200 },
    { username: "pro_player", score: 170 },
    { username: "student_phase3", score: 120 },
    { username: "ahli_gizi", score: 100 },
    { username: "jobseeker", score: 90 },
    { username: "player4", score: 80 },
    { username: "player5", score: 70 },
    { username: "player7", score: 60 }
];

let temp = 0
let result = []
let peringkat = 0

function temukanPeringkat() {
    console.log(inputan, "OOOOOOOO");
    for (let index = 0; index < dbLeadboard.length; index++) {
        let data = dbLeadboard[index].score
        if (inputan.score > data) {
            temp = data
            result.push(inputan)
            peringkat = index + 1
            for (let j = index; j < dbLeadboard.length; j++) {
                result.push(dbLeadboard[j])
            }
            break;
        }
        result.push(dbLeadboard[index])
        if (index === dbLeadboard.length - 1) {
            peringkat = index + 1
            result.push(inputan)
        }
    }
    dbLeadboard = result
    result = []
    cetakLeaderboard()
}
temukanPeringkat();
function cetakLeaderboard() {
    for (let index = 0; index < 5; index++) {
        let x = "userName" + (index + 1)
        let w = "SCores" + (index + 1)
        // console.log(x, w, "PPPPPPPPPP");
        const tesUserName = document.querySelector(`.${x}`);
        const tesScores = document.querySelector(`.${w}`);
        // console.log(tesUserName, tesScores, "++++++");
        tesUserName.innerText = dbLeadboard[index].username
        tesScores.innerText = dbLeadboard[index].score
    }
    if (peringkat > 5) {
        const tesPeringkat = document.querySelector(`.peringkat`);
        const tesUserName = document.querySelector(`.userName6`);
        const tesScores = document.querySelector(`.SCores6`);
        tesPeringkat.innerText = peringkat
        tesUserName.innerText = inputan.username
        tesScores.innerText = inputan.score
    } else {
        document.getElementsByClassName("rankingSaya").style.display = "none";
    }
}