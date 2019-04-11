import { delegateEvent, addMonth } from "./lib";
import generateCalendarModel from "./calendarHelpers";
import PubSub from "./PubSub";

import "./calendar.css";

class Calendar {
  constructor(container) {
    this.date = new Date();

    this.model = generateCalendarModel(this.date);
    this.container = container;
    this.render();
    this.initHandlers();

    this.onChangeMonthPubSub = new PubSub();
    this.onDaySelectPubSub = new PubSub();
  }

  onChangeMonth(callbackFn) {
    return this.onChangeMonthPubSub.subscribe(callbackFn);
  }

  onDaySelect(callbackFn) {
    return this.onDaySelectPubSub.subscribe(callbackFn);
  }

  renderDays(week) {
    return week
      .map(
        day =>
          `<div class = "calendar__day" data-day="${day}" >${day || ""}</div>`
      )
      .join("");
  }

  renderWeeks(weeks) {
    return weeks.map(week => `${this.renderDays(week)}`).join("");
  }

  goToDate(date) {
    this.date = date;
    this.model = generateCalendarModel(this.date);
    this.render();
    this.onChangeMonthPubSub.publish(date);
  }

  goToPrevMonth() {
    this.goToDate(addMonth(this.date, -1));
  }
  goToNextMonth() {
    this.goToDate(addMonth(this.date, 1));
  }

  initHandlers() {
    delegateEvent(this.container, ".calendar__day", "click", ev => {
      const date = new Date(this.date);
      date.setDate(ev.target.dataset.day);
      this.onDaySelectPubSub.publish(date);
    });

    delegateEvent(this.container, ".calendar__button_prev", "click", () => {
      this.goToPrevMonth();
    });

    delegateEvent(this.container, ".calendar__button_next", "click", () => {
      this.goToNextMonth();
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="calendar">
        <button class="calendar__button calendar__button_prev">< prev</button>
        <button class="calendar__button calendar__button_next">next ></button>
        <br>
      
        ${this.renderWeeks(this.model)}
      </div>
  `;
  }
}

export default Calendar;
