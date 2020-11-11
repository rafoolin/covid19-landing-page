// Fetch summary of covid19
document.addEventListener("DOMContentLoaded", () => fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((myJson) => createHtml(myJson)).catch(function(err) {}));


/**
 * Create HTML parts.
 *
 */
function createHtml(data) {
    var globalData = data["Global"];
    // Apply data to primary and secondary div.
    for (var i = 0; i < 2; i++) {
        document.querySelectorAll('.total-confirmed')[i].innerHTML = globalData["TotalConfirmed"];
        document.querySelectorAll('.total-death')[i].innerHTML = globalData["TotalDeaths"];
        document.querySelectorAll('.total-recovered')[i].innerHTML = globalData["TotalRecovered"];
        document.querySelectorAll('.Countries')[i].innerHTML = data["Countries"].length;

    }
}