import { delegateEvent, addMonth } from "./lib";
import generateCalendarModel from "./calendarHelpers";
import PubSub from "./PubSub";

import "../style/calendar.css";

class Calendar {
  constructor(container) {
    this.date = new Date();

    this.model = generateCalendarModel(this.date);
    this.container = container;
    this.currentDay = undefined;
    this.render();
    this.initHandlers();
    this.onChangeMonthPubSub = new PubSub();
    this.onDaySelectPubSub = new PubSub();
    this.onDaySelect(this.changeActiveDay.bind(this));
    this.history = true;
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
        day => {
          let dayHTML = document.createElement('a');
          dayHTML.innerHTML = day || "";
          if (dayHTML.innerHTML === "") { dayHTML.className = 'disabled'; return dayHTML.outerHTML; }
          dayHTML.href = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${day}`;
          dayHTML.className = "calendar__day";
          dayHTML.dataset.day = day;
          dayHTML.tabIndex = 0;
          return dayHTML.outerHTML;
          // return `<div class = "calendar__day" data-day="${day}" >${day || ""}</div>`
        }
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

  changeActiveDay(date, ev) {
    if (typeof this.currentDay !== "undefined") this.currentDay.toggleAttribute('active');
    this.currentDay = ev.target;
    this.currentDay.toggleAttribute('active');
  }

  initHandlers() {
    delegateEvent(this.container, ".calendar__day", "click", ev => {
      ev.preventDefault();
      const date = new Date(this.date);
      date.setDate(ev.target.dataset.day);
      this.onDaySelectPubSub.publish(date, ev);
      if (this.history) history.pushState({}, ev.target.href, ev.target.href);
      this.history = true;
    });

    delegateEvent(this.container, ".calendar__day", "keydown", ev => {
      if (ev.key !== 'Enter') return;
      ev.target.click();
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
