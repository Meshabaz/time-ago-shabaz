export default function timeAgo(dateInput) {
    const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    for (let unit in intervals) {
      const value = Math.floor(seconds / intervals[unit]);
      if (value !== 0) {
        return rtf.format(-value, unit);
      }
    }
  
    return "just now";
  }
  