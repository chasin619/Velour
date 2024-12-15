export const scrollToSection = (e: any) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("data-target");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const formatDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};
