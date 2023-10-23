(function pageLoad() {
  const startTime = Date.now();

  function getLoadTime() {
    const endTime = Date.now();
    return endTime - startTime;
  }

  function displayPageLoadTime() {
    const loadTime = getLoadTime();
    const statistics = "Страница загрузилась за " + loadTime + " мс";
    const footerRow = document.getElementsByClassName("footer__container")[0];
    const statisticsElement = document.createElement("div");
    statisticsElement.classList.add("footer__row")
    statisticsElement.textContent = statistics;
    footerRow.appendChild(statisticsElement);
  }

  window.addEventListener("load", displayPageLoadTime);
})();
