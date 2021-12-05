// State balance and start year

let userBalance = 1500;
let season = 2021;
let managementFee = 0;

// Object constants for each team

const ars = {
    object: "ars",
    name: "Arsenal",
    color1: "FF0000", 
    color2: "CC0000", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 425,
    flucPrice: 425,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const asv = {
    object: "asv",
    name: "Aston Villa",
    color1: "CC0099", 
    color2: "990000", 
    color3: "99CCFF",
    userShares: 0,
    steadyPrice: 150,
    flucPrice: 150,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const bha = {
    object: "bha",
    name: "Brighton and Hove Albion",
    color1: "1200DD", 
    color2: "FFFF00", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 150,
    flucPrice: 150,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const bre = {
    object: "bre",
    name: "Brentford",
    color1: "FF0000", 
    color2: "FFFFFF", 
    color3: "000000",
    userShares: 0,
    steadyPrice: 125,
    flucPrice: 125,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const bur = {
    object: "bur",
    name: "Burnley",
    color1: "990000", 
    color2: "99CCFF",
    color3: "FFFFFF", 
    userShares: 0,
    steadyPrice: 175,
    flucPrice: 175,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const che = {
    object: "che",
    name: "Chelsea",
    color1: "1200DD", 
    color2: "EEFF22", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 525,
    flucPrice: 525,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const cry = {
    object: "cry",
    name: "Crystal Palace",
    color1: "1200DD", 
    color2: "FF0000", 
    color3: "1200DD",
    userShares: 0,
    steadyPrice: 175,
    flucPrice: 175,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const eve = {
    object: "eve",
    name: "Everton",
    color1: "1200DD", 
    color2: "FFFFFF", 
    color3: "1200DD",
    userShares: 0,
    steadyPrice: 250,
    flucPrice: 250,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const lei = {
    object: "lei",
    name: "Leicester City",
    color1: "1200DD", 
    color2: "FFFF00", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 200,
    flucPrice: 200,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const liv = {
    object: "liv",
    name: "Liverpool",
    color1: "FF0000", 
    color2: "FF9966", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 625,
    flucPrice: 625,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const mnc = {
    object: "mnc",
    name: "Manchester City",
    color1: "66CCFF", 
    color2: "FFFFFF", 
    color3: "66CCFF",
    userShares: 0,
    steadyPrice: 625,
    flucPrice: 625,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const mnu = {
    object: "mnu",
    name: "Manchester United",
    color1: "FF0000", 
    color2: "000000", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 650,
    flucPrice: 650,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const nwc = {
    object: "nwc",
    name: "Newcastle United",
    color1: "000000", 
    color2: "FFFFFF", 
    color3: "CC9900",
    userShares: 0,
    steadyPrice: 175,
    flucPrice: 175,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const nor = {
    object: "nor",
    name: "Norwich City",
    color1: "FFFF00", 
    color2: "66FF66",
    color3: "FFFF00", 
    userShares: 0,
    steadyPrice: 150,
    flucPrice: 150,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const sou = {
    object: "sou",
    name: "Southampton",
    color1: "000000", 
    color2: "FF0000", 
    color3: "FFFFFF",
    userShares: 0,
    steadyPrice: 150,
    flucPrice: 150,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const tot = {
    object: "tot",
    name: "Tottenham Hotspur",
    color1: "FFFFFF", 
    color2: "FFFFFF", 
    color3: "000099",
    userShares: 0,
    steadyPrice: 500,
    flucPrice: 500,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const wat = {
    object: "wat",
    name: "Watford",
    color1: "FFFF00", 
    color2: "000000",
    color3: "FF0000", 
    userShares: 0,
    steadyPrice: 150,
    flucPrice: 150,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const whu = {
    object: "whu",
    name: "West Ham United",
    color1: "990000", 
    color2: "99CCFF",
    color3: "FFFFFF", 
    userShares: 0,
    steadyPrice: 175,
    flucPrice: 175,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}

const wol = {
    object: "wol",
    name: "Wolves",
    color1: "CC9900", 
    color2: "000000",
    color3: "CC9900", 
    userShares: 0,
    steadyPrice: 175,
    flucPrice: 175,
    priceChange: "&#9654",
    dividend: 0,
    currency: "£"
}


// Array of all teams to be printed

const teamList = [ars, asv, bha, bre, bur, che, cry, eve, lei, liv, mnc, mnu, nwc, nor, sou, tot, wat, whu, wol];

let portfolioList = teamList.filter(team => team.userShares > 0);

// Print initial values to initial Teams List document.querySelector('#divID').innerHTML = ...

function printTeams(arr) {
    let items = '';
    teamList.forEach((team) => {
        items +=
            `<tr>
              <td><span style="color:#${team.color1}";>&#9646;</span><span style="color:#${team.color2}";>&#9646;</span><span style="color:#${team.color3}";>&#9646;</span></td>
              <td>${team.name}</td>
              <td>${team.currency}${team.flucPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td>${team.priceChange}</td>         
              <td>${team.currency}${team.dividend.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td>${team.userShares}</td>
              <td><button type="button" onclick="buyShare(${team.object})">Buy</button></td>
              <td><button type="button" onclick="sellShare(${team.object})">Sell</button></td>
            </tr>`;        
    })
    return items;
}

function printPortfolio(arr) {
    let items = '';
    portfolioList.forEach((team) => {
        items +=
            `<tr>
              <td><span style="color:#${team.color1}";>&#9646;</span><span style="color:#${team.color2}";>&#9646;</span><span style="color:#${team.color3}";>&#9646;</span></td>
              <td>${team.name}</td>
              <td>${team.currency}${team.flucPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td>${team.priceChange}</td>         
              <td>${team.currency}${team.dividend.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td>${team.userShares}</td>
              <td><button type="button" onclick="sellShare(${team.object})">Sell</button></td>
              <td>${team.currency}${(team.userShares * team.flucPrice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            </tr>`;    
    })
    return items;
}

// Total the portfolio

function sumPortfolio() {
    let sum = 0;
    portfolioList.forEach((team) => {
        sum += (team.userShares * team.flucPrice)
    })
    return sum;
}



// Update values funaction (used in all buy and sell functions)

function updateValues () {
    sumPortfolio();
    printPortfolio();
    printTeams();
    document.querySelector('#teamList').innerHTML = `${printTeams(teamList)}`;
    document.querySelector('#portfolioList').innerHTML = `${printPortfolio(portfolioList)}`;
    document.querySelector('#userBal').innerHTML = `£${userBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.querySelector('#portfolioValue').innerHTML = `£${(sumPortfolio()+userBalance).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.querySelector('#managementFee').innerHTML = `£${(managementFee).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

updateValues();

// Buy and sell share functions

function buyShare(team) {
    if (userBalance >= team.flucPrice) {
    team.userShares += 1;
    userBalance -= team.flucPrice;
    portfolioList = teamList.filter(team => team.userShares > 0);
    updateValues();
    }
}

function sellShare(team) {
    if (team.userShares > 0) {
    team.userShares -= 1;
    userBalance += team.flucPrice * 0.985;
    portfolioList = teamList.filter(team => team.userShares > 0);
    updateValues();
    }
}

function newSeason () {

    managementFee = sumPortfolio()*0.02;
    userBalance -= managementFee;

    teamList.forEach((team) => {
        let randomNumber = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
        if ( randomNumber < 1) {
            team.dividend = 0;
            team.priceChange = `&#9660 ${(randomNumber-1).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`;
        } else if (randomNumber == 1) {
        team.dividend = (team.flucPrice / 20) * randomNumber;
        team.priceChange = `&#9654 ${(randomNumber-1).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`;
        } else {
        team.dividend = (team.flucPrice / 20) * randomNumber;
        team.priceChange = `&#9650 +${(randomNumber-1).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`;
        }
    team.flucPrice = ((2 * (team.flucPrice * randomNumber) ) + team.steadyPrice)/3;
    let earnings = team.userShares * team.dividend;
    userBalance += earnings;
    })
    updateValues();
    season += 1;
    document.querySelector('#season').innerHTML = `${season}/${season+1}`;
}