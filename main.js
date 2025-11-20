window.addEventListener("DOMContentLoaded", main);

function main() {
  renderClock();
  setInterval(renderClock, 1000);
}

function renderTime() {
  const date = new Date();

  const showTime = date.toLocaleTimeString("sv-SE", { timeStyle: "short" });
  document.getElementById("time").textContent = showTime;
}

function renderClock() {
  getWeekday();
  renderTime();
}

function getWeekday(weekdayIndex) {
  switch (weekdayIndex) {
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
}

// alt använda en array
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

// const showDay = `${day}`;
// document.getElementById("day").textContent = showDay;
