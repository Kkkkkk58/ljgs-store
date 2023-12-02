const productCollection = document.getElementsByClassName("product-collection")[0];
const preloader = document.getElementsByClassName("preloader")[0];
const api = "https://run.mocky.io/v3/85dccc8d-2f1b-41bc-81d3-948a27d6b9ab";

function getData() {
  fetch(api)
    .then(response => response.json())
    .then(data => filterData(data))
    .then(data => displayData(data))
    .catch(err => reportLoadingError(err))
    .finally(() => preloader.classList.add("hidden"));
}

function reportLoadingError(err) {
  console.error(err);
  const errorReport = document.createElement("div");
  errorReport.classList.add("error_report");
  errorReport.textContent = "⚠ Oops! Something went wrong!";
  productCollection.appendChild(errorReport);
}

function filterData(data) {
  const windowSize = 5;
  const from = Math.floor(Math.random() * (data.length - windowSize));
  return data.slice(from, from + windowSize);
}

function displayData(data) {
  productCollection.innerHTML = (
    data.map(getProductCard).join("")
  );
}

function getProductCard(product) {
  return `
<a href=${product.api_link} class="product-link">
    <div class="product-card">
        <div class="product-card__img">
            <img src=${product.image_url} alt="item-${product.id}"/>
        </div>
         <div class="product-card__body">
           <h4 class="product-card__title">${product.name}</h4>
           <p class="product-card__description">${product.description}</p>
           <p class="product-card__price">${product.price} ₽</p>
         </div>
    </div>
</a>
  `;
}

window.addEventListener("load", getData);
