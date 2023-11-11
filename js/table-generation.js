const generatedTablePlace = document.getElementsByClassName("generated_table__placeholder")[0];

function displayTable(event) {
  event.preventDefault();

  const table = generateTable(rowsInput.value, colsInput.value, bgColorInput.value);

  if (generatedTablePlace.firstChild === null) {
    generatedTablePlace.appendChild(table);
  } else {
    generatedTablePlace.replaceChild(table, generatedTablePlace.firstChild);
  }
}

function generateTable(rows, cols, bgColor) {
  const table = document.createElement("table");
  table.createTHead();

  for (let i = 0; i < rows; ++i) {
    const tr = table.insertRow();
    tr.classList.add("generated_table__row");
    for (let j = 0; j < cols; ++j) {
      const td = tr.insertCell();
      td.contentEditable = "true";
      td.classList.add("generated_table__cell");
      td.style.backgroundColor = bgColor;
      //   TODO: Use https://github.com/onury/invert-color to invert text color
    }
  }

  table.classList.add("generated_table");
  return table;
}

const form = document.getElementsByClassName("table_generation__form")[0];
form.addEventListener("submit", displayTable);

const rowsInput = document.getElementById("table_generation__rows");
const colsInput = document.getElementById("table_generation__cols");
const bgColorInput = document.getElementById("table_generation__bgcolor");

const tableGenerationParamsKey = "table_generation_params";
const saveParams = document.getElementById("table_generation__save_params");
saveParams.addEventListener("click", function () {
  const params = {
    rows: rowsInput.value,
    cols: colsInput.value,
    bgColor: bgColorInput.value
  };

  localStorage.setItem(tableGenerationParamsKey, JSON.stringify(params));
})

const loadParams = document.getElementById("table_generation__load_params");
loadParams.addEventListener("click", function () {
  const item = localStorage.getItem(tableGenerationParamsKey);
  if (item === null) {
    alert("Сохранённые параметры не найдены!");
    return;
  }

  const needsReload = confirm(`Восстановить параметры: ${item}?`);
  if (!needsReload) {
    return;
  }
  const params = JSON.parse(item);
  rowsInput.value = params.rows;
  colsInput.value = params.cols;
  bgColorInput.value = params.bgColor;
})
