document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("multiplication-table");

  // Generate the multiplication table
  for (let i = 1; i <= 12; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 12; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j === 1) {
        cell.innerHTML = "&#215;";
        cell.classList.add("multiplication-symbol");
      } else if (i === 1) {
        cell.textContent = j;
        cell.classList.add("header-cell");
      } else if (j === 1) {
        cell.textContent = i;
        cell.classList.add("header-cell");
      } else {
        cell.textContent = i * j;
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }
});
