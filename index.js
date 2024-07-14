let One = 1
let Two = 2
let Three = 3 
let homePoints = Number(document.getElementById("homePt").innerText)
let awayPoints = Number(document.getElementById("awayPt").innerText)


function homeTeamPlusOne() {
    homePoints += 1
    document.getElementById("homePt").innerText = homePoints
    highlightLeader(homePoints , awayPoints)
}

function homeTeamPlusTwo() {
    homePoints += 2
    document.getElementById("homePt").innerText = homePoints
    highlightLeader(homePoints , awayPoints)
}

function homeTeamPlusThree() {
    homePoints += 3
    document.getElementById("homePt").innerText = homePoints
    highlightLeader(homePoints , awayPoints)
}


function awayTeamPlusOne() {
    awayPoints += 1
    document.getElementById("awayPt").innerText = awayPoints
    highlightLeader(homePoints , awayPoints)
}

function awayTeamPlusTwo() {
    awayPoints += 2
    document.getElementById("awayPt").innerText = awayPoints
    highlightLeader(homePoints , awayPoints)
}

function awayTeamPlusThree() {
    awayPoints += 3
    document.getElementById("awayPt").innerText = awayPoints
    highlightLeader(homePoints , awayPoints)
}

function newGame() {
    homePoints -= homePoints
    document.getElementById("homePt").innerText = homePoints
    awayPoints -= awayPoints
    document.getElementById("awayPt").innerText = awayPoints
    document.getElementById("awayPt").style.color = "#F94F6D";
    document.getElementById("homePt").style.color = "#F94F6D";
}

function highlightLeader(homePoints , awayPoints) {
    if (homePoints > awayPoints) {
        document.getElementById("homePt").style.color = "#87C38F";
        document.getElementById("awayPt").style.color = "#F94F6D";
    }
    else if (awayPoints > homePoints) {
        document.getElementById("awayPt").style.color = "#87C38F";
        document.getElementById("homePt").style.color = "#F94F6D";
    }
    else {
        document.getElementById("awayPt").style.color = "#F94F6D";
        document.getElementById("homePt").style.color = "#F94F6D";
    }
}
