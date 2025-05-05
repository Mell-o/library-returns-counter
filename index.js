let closeDayEl = document.getElementById("close-day-el")
let returnCountEl = document.getElementById("return-count-el")
let returnCount = 0

function returnBook() {
    returnCount += 1
    returnCountEl.textContent = returnCount
}
  
function closeDay() {
    let returnCountStr = returnCount + " - "
    closeDayEl.textContent += returnCountStr
    returnCountEl.textContent = 0
    returnCount = 0
}
