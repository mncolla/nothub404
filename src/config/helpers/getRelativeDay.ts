import { formatDistanceToNow, format } from 'date-fns';

export const getRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const inputDate = new Date(date);
  const diffInMs = now.getTime() - inputDate.getTime();

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays < 30) {
    return `updated ${formatDistanceToNow(inputDate, { addSuffix: true })}`;
  } else {
    return `updated on ${format(inputDate, "d MMM yyyy")}`;
  }
}