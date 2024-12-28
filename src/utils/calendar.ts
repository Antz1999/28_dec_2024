interface CalendarEvent {
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
}

export function createShowDate(year: number, month: number, day: number, hour: number): Date {
  // Create date directly in UTC/GMT
  const date = new Date();
  date.setUTCFullYear(year);
  date.setUTCMonth(month);
  date.setUTCDate(day);
  date.setUTCHours(hour, 0, 0, 0);
  return date;
}

export function generateGoogleCalendarLink(event: CalendarEvent): string {
  const formatDate = (date: Date) => {
    return date.toISOString()
      .replace(/-|:|\.\d{3}/g, '')  // Remove dashes, colons, and milliseconds
      .replace(/Z$/, ''); // Remove Z suffix as Google Calendar expects UTC without Z
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatDate(event.startDate)}/${formatDate(event.endDate)}`,
    details: event.description,
    location: event.location
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}