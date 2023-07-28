export const currentDate = new Date().toISOString().split("T")[0];
export function formatDateToDDMMYYYY(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
export function formatDateToYYYYMMdd(dateString) {
  // Split the input date string into day, month, and year components
  const dateComponents = dateString.split("-");

  if (dateComponents.length !== 3) {
    // Invalid date format, return empty string or throw an error based on your requirement.
    return "";
  }

  const day = dateComponents[0];
  const month = dateComponents[1];
  const year = dateComponents[2];

  // Reassemble the date components in the "YYYY-MM-DD" format
  const convertedDate = `${year}-${month}-${day}`;
  return convertedDate;
}

export function convertToTwelveHourFormat(time24) {
  const [hour, minute] = time24.split(":");
  let period = "AM";
  let hour12 = parseInt(hour, 10);

  if (hour12 >= 12) {
    period = "PM";
    hour12 = hour12 === 12 ? 12 : hour12 - 12;
  } else if (hour12 === 0) {
    hour12 = 12;
  }

  return `${hour12}:${minute} ${period}`;
}

export function convertToTwentyFourHourFormat(time12) {
  const timeParts = time12.split(" ");
  const [time, period] = timeParts;
  const [hour, minute] = time.split(":");
  let hour24 = parseInt(hour, 10);

  if (period === "PM" && hour24 !== 12) {
    hour24 += 12;
  } else if (period === "AM" && hour24 === 12) {
    hour24 = 0;
  }

  return `${String(hour24).padStart(2, "0")}:${minute}`;
}
