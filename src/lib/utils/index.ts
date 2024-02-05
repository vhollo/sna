export function formatDate(date: string, lang: string): string {
  return new Date(date).toLocaleDateString(lang || "hu", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
