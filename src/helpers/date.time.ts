export const dateTimeCalc = (date: string) => {
  const today: Date = new Date(date);

  const day: string = today.getDate().toString().padStart(2, "0");
  const month: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(today);
  const year: string = today.getFullYear().toString();

  const formattedDate: string = `${day} ${month}, ${year}`;

  return formattedDate;
};
