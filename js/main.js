const currentPath = document.location.pathname;
const parts = currentPath.split('/');
const currentPage = parts.pop() || parts.pop();

function setActiveMenuItem() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const link = item.children[0].getAttribute("href");

    if (currentPage === link) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("load", setActiveMenuItem);
