const getMonthlyDates = (days: Date[], dayOfMonth: number): Date[] => {
  const LAST_REGULAR_DAY_NUMBER = 28;

  const filteredMonthlyDates: Date[] = [];

  days.forEach((day) => {
    const currentFullDate = new Date(day);

    const currentFullYear = currentFullDate.getFullYear();

    const currentMonth = currentFullDate.getMonth();

    const currentDay = currentFullDate.getDate();

    const lastMonthDay = getLastDayOfGivenMonthOfYear(
      currentFullYear,
      currentMonth
    );

    if (currentDay === dayOfMonth) {
      filteredMonthlyDates.push(day);
    }

    if (
      lastMonthDay >= LAST_REGULAR_DAY_NUMBER &&
      dayOfMonth > LAST_REGULAR_DAY_NUMBER &&
      currentDay >= LAST_REGULAR_DAY_NUMBER
    ) {
      if (lastMonthDay === currentDay) {
        const localLastDate = new Date(filteredMonthlyDates.slice(-1)[0]);

        if (currentFullDate.getMonth() !== localLastDate.getMonth()) {
          filteredMonthlyDates.push(day);
        }
      }
    }
  });

  return filteredMonthlyDates;
};

const getLastDayOfGivenMonthOfYear = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};
