export const scrollToSection = (e: any) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("data-target");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
