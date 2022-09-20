export function removeTime(date = new Date()) {
  return new Date(date.toDateString());
}
