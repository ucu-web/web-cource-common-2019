const getNumberOfDaysInMonth = date => {
  const d = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return d.getDate()
}

const chunk = (array, size = 1) => {
  let result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

const addMonth = (date, monthAmount) => {
  const currentMonth = date.getMonth()
  const result = new Date(date)
  result.setMonth(currentMonth + monthAmount)
  return result
}

const generateCalendarModel = (currentDate, startDay = 0) => {
  const DAYS_OF_THE_WEEK = 7 //Константа, що задає кількість днів в тиждні.

  const numberOfDays = getNumberOfDaysInMonth(currentDate) //Скільки днів в поточному місяці.

  //Визначимо з якого дня тиждня розпочинається наш місяць.
  currentDate.setDate(1)
  let firstDayOfWeek = currentDate.getDay()

  // Скоректуємо день початку тиждня відповідно стартового дня
  // (тиждень може розпочинатись з понеділка, вівторка, чи будь-якого іншого дня)
  firstDayOfWeek =
    (DAYS_OF_THE_WEEK - (startDay - firstDayOfWeek)) % DAYS_OF_THE_WEEK

  // Згенеруємо масив, який буде відображенням нашого поточного місяця.
  let month = [
    ...new Array(firstDayOfWeek).fill(), // "префікс-масив"
    ...new Array(numberOfDays).fill().map((el, i) => i + 1), // Календар
  ]

  return chunk(month, DAYS_OF_THE_WEEK) //Розбиваємо місяць на тиждні
}

class Calendar {
  constructor(container) {
    this.date = new Date()

    this.model = generateCalendarModel(this.date)
    this.container = container
    this.render()
    this.initHandlers()
  }

  renderDays(week) {
    return week
      .map(day => `<div class = "calendar__day">${day || ''}</div>`)
      .join('')
  }

  renderWeeks(weeks) {
    return weeks.map(week => `${this.renderDays(week)}`).join('')
  }

  goToDate(date) {
    this.date = date
    this.model = generateCalendarModel(this.date)
    this.render()
  }

  goToPrevMonth() {
    this.goToDate(addMonth(this.date, -1))
  }
  goToNextMonth() {
    this.goToDate(addMonth(this.date, 1))
  }

  initHandlers() {
    this.container.addEventListener('click', ev => {
      if (ev.target.matches('.calendar__day')) {
        jhfjfjh
      }

      if (ev.target.matches('.calendar__button_prev')) {
        this.goToPrevMonth()
      }

      if (ev.target.matches('.calendar__button_next')) {
        this.goToNextMonth()
      }
    })
  }

  render() {
    this.container.innerHTML = `
      <div class="calendar">
        <button class="calendar__button calendar__button_prev">< prev</button>
        <button class="calendar__button calendar__button_next">next ></button>
        <br>
      
        ${this.renderWeeks(this.model)}
      </div>
  `
  }
}

const calendar = new Calendar(document.body.getElementsByTagName('section')[0])
