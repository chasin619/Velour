export const scrollToSection = (e: any) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("data-target");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offset = 50;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
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


export const getHeaders = () => {
  return {
    headers: {
      userId: `675f2725de1dcc5fd9f32936`,
    },
  };
}