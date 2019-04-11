import Calendar from "./Calendar";

const calendar = new Calendar(document.body.getElementsByTagName("section")[0]);

let counter = 0;
const calendarMonthUnsubscribe = calendar.onChangeMonth(date => {
  console.log(date, counter++);
  if (counter > 3) {
    calendarMonthUnsubscribe();
  }
});

calendar.onDaySelect(day => {
  console.log(day);
});
