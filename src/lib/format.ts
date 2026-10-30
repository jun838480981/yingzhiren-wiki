export function formatDate(date?: string): string {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;
  return `${year}.${month}.${day}`;
}

export function formatCount(value: number): string {
  return value < 10 ? `0${value}` : String(value);
}
