export const formatDateTime = (date: Date | string): string => {
  const newDate = typeof date === "string" ? new Date(date) : date;
  return newDate.toISOString().replace("T", " ").split(".")[0];
};


