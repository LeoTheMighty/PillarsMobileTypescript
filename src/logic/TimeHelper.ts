// =====================================================================================================================
// Date management
// =====================================================================================================================

/**
 * @return {Date} The date representing right now.
 */
export const now = (): Date => new Date();

/**
 * @return {string} The string representing right now.
 */
export const nowString = (): string => convertToISOString(now())!;

/**
 * @param  {Date} d The date object to copy.
 * @return {Date} The copied date object.
 */
export const copyDate = (d: Date): Date => new Date(d.getTime());

/**
 * Pretty prints the date object for better readability.
 *
 * @param {Date} date The date object to get the pretty print for.
 * @return {string} The pretty printed string for the date.
 */
export const prettyPrintDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

// =====================================================================================================================
// Date Difference Management
// =====================================================================================================================

/**
 * Returns whether the given date is the same date as today.
 *
 * @param {Date} date The date to query if the day is the same for.
 * @param {Date} nowDate The date to indicate the now date.
 * @return {boolean} Whether the day is the same date or not.
 */
export const isSameDay = (date: Date, nowDate: Date = now()): boolean =>
  daysBetween(date, nowDate) === 0;

/**
 * Returns whether the date is before the given now date.
 *
 * @param {Date} date The date to query if the day is before for.
 * @param {Date} nowDate The date to indicate the now date.
 * @return {boolean} Whether the day is before or not.
 */
export const isBefore = (date: Date, nowDate: Date = now()): boolean =>
  daysBetween(date, nowDate) > 0;

/**
 * @param  {number} days The number of days before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of days before the given date
 */
export const daysBefore = (days: number, date: Date = now()): Date => {
  const newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() - days);
  return newDate;
};

/**
 * @param  {number} weeks The number of weeks before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of weeks before the given date
 */
export const weeksBefore = (weeks: number, date: Date = now()): Date => {
  const newDate = copyDate(date);
  newDate.setDate(date.getDate() - 7 * weeks);
  return newDate;
};

/**
 * @param  {number} months The number of months before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of months before the given date
 */
export const monthsBefore = (months: number, date: Date = now()): Date => {
  const newDate = copyDate(date);
  newDate.setMonth(date.getMonth() - months);
  return newDate;
};

/**
 * @param  {number} years The number of years before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of years before the given date
 */
export const yearsBefore = (years: number, date: Date = now()): Date => {
  const newDate = copyDate(date);
  newDate.setFullYear(date.getFullYear() - years);
  return newDate;
};

/**
 * @param  {Date} fromDate The from date to calculate the difference
 * @param  {Date} toDate The to date to calculate the difference
 * @return {number} The number of full days between the two dates
 */
export const daysBetween = (fromDate: Date, toDate: Date): number => {
  const fromCopy = copyDate(fromDate);
  const toCopy = copyDate(toDate);
  fromCopy.setHours(0, 0, 0, 0);
  toCopy.setHours(0, 0, 0, 0);
  return Math.round(
    (toCopy.getTime() - fromCopy.getTime()) / (1000 * 60 * 60 * 24),
  );
};

// ISO String Management

/**
 * @param  {Date} d The date object to convert
 * @return {null|string} The ISO formatted string for the Date object.
 */
export const convertToISOString = (d: Date): string | null => d && d.toISOString();

/**
 * @param  {string} s The ISO formatted string to parse.
 * @return {Date} The Date object indicating the time.
 */
export const parseISOString = (s: string): Date => new Date(String(s));

/**
 * Figures out whether the date worked.
 *
 * @param date {Date} The date object.
 */
export const isValidDate = (date: Date) => {
  return !isNaN(date.getTime());
}