window.addEventListener("DOMContentLoaded", main);
const container = document.querySelector("div");

function main() {
  renderClock();
  setInterval(renderClock, 1000);
}

function renderClock() {
  renderTime();
  renderDay();
  renderMonth();
}

function renderTime() {
  const time = new Date();

  const showTime = time.toLocaleTimeString("sv-SE", { timeStyle: "medium" });
  document.getElementById("time").textContent = showTime;
}

function renderDay() {
  const day = new Date();
  const showDay = getWeekday(day.getDay());

  document.getElementById("day").textContent = showDay;
}

function getWeekday(showDay) {
  switch (showDay) {
    case 1:
      return "Måndag";
    case 2:
      return "Tisdag";
    case 3:
      return "Onsdag";
    case 4:
      return "Torsdag";
    case 5:
      return "Fredag";
    case 6:
      return "Lördag";
    case 7:
      return "Söndag";
  }
  renderDay();
}

function renderMonth() {
  const month = new Date();
  const showMonth = getMonth(month.getMonth());

  document.getElementById("month").textContent = showMonth;
}

function getMonth(showMonth) {
  switch (showMonth) {
    case 1:
      return "Januari";
    case 2:
      return "Februari";
    case 3:
      return "Mars";
    case 4:
      return "April";
    case 5:
      return "Maj";
    case 6:
      return "Juni";
    case 7:
      return "Juli";
    case 8:
      return "Augusti";
    case 9:
      return "September";
    case 10:
      return "Oktober";
    case 11:
      return "November";
    case 12:
      return "December";
  }
  renderMonth();
}

/* // alt använda en array
function getMonthName(monthIndex) {
  const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "Spetember",
    "Oktober",
    "November",
    "December",
  ];
  return months[monthIndex];
}
 */
