import { chunk, getNumberOfDaysInMonth } from "./lib";

const generateCalendarModel = (currentDate, startDay = 0) => {
    const DAYS_OF_THE_WEEK = 7;

    const numberOfDays = getNumberOfDaysInMonth(currentDate);

    currentDate.setDate(1);
    let firstDayOfWeek = currentDate.getDay();

    firstDayOfWeek =
        (DAYS_OF_THE_WEEK - (startDay - firstDayOfWeek)) % DAYS_OF_THE_WEEK;

    let month = [
        ...new Array(firstDayOfWeek).fill(),
        ...new Array(numberOfDays).fill().map((el, i) => i + 1)
    ];

    return chunk(month, DAYS_OF_THE_WEEK);
};

export default generateCalendarModel;
