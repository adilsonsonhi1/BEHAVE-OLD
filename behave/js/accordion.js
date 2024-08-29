
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    header.addEventListener("click", function() {
      const isOpen = item.classList.contains("open");
      if (!isOpen) {
        items.forEach(item => {
          item.classList.remove("open");
          item.querySelector(".accordion-content").style.maxHeight = null;
        });
        item.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        item.classList.remove("open");
        content.style.maxHeight = null;
      }
    });
  });
});

