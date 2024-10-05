'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
// const appendColumnButton = document.querySelector('.append-column');
// const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const columns = table.querySelector('tr').children.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    const newTd = document.createElement('td');

    newRow.appendChild(newTd);
  }

  tbody.appendChild(newRow);

  disableButtons();
  enableButtons();
});

removeRowButton.addEventListener('click', () => {
  tbody.removeChild(tbody.lastElementChild);

  disableButtons();
  enableButtons();
});

function disableButtons() {
  const rows = tbody.children.length;

  if (rows <= 2) {
    removeRowButton.disabled = true;
  }

  if (rows >= 10) {
    appendRowButton.disabled = true;
  }
}

function enableButtons() {
  const rows = tbody.children.length;

  if (rows > 2) {
    removeRowButton.disabled = false;
  }

  if (rows < 10) {
    appendRowButton.disabled = false;
  }
}
