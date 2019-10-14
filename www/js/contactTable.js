contacts = [];


let refreshDOMTable = () => {
  console.log(contacts, 'contact-index');

  let tableContainer = document.querySelector('#tableContainer');
  let oldTableBody = document.querySelector('#tableBody');
  oldTableBody.setAttribute('id', 'tableBody');
  oldTableBody.remove();
  let newTableBody = document.createElement('span');
  newTableBody.setAttribute('id', 'tableBody');
  tableContainer.append(newTableBody);

  for (let i = 0; i < contacts.length; i++) {
    let currentRow = document.createElement('div');
    currentRow.setAttribute('class', 'table-row');
    currentRow.setAttribute('contact-index', i)
    newTableBody.append(currentRow);

    let currentNameColumn = document.createElement('div');
    currentNameColumn.innerHTML = contacts[i].name;
    currentNameColumn.setAttribute('class', 'table-column name');
    currentRow.append(currentNameColumn);

    let currentPhoneColumn = document.createElement('div');
    currentPhoneColumn.innerHTML = contacts[i].phone;
    currentPhoneColumn.setAttribute('class', 'table-column phone')
    currentRow.append(currentPhoneColumn);

    let currentEmailColumn = document.createElement('div');
    currentEmailColumn.innerHTML = contacts[i].email;
    currentEmailColumn.setAttribute('class', 'table-column email');
    currentRow.append(currentEmailColumn);

    let currentEditBtn = document.createElement('span');
    currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
    currentEditBtn.setAttribute('class', 'table-column edit i');
    currentRow.append(currentEditBtn);

    let currentDeleteBtn = document.createElement('span');
    currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    currentDeleteBtn.setAttribute('class', 'table-column delete i');
    currentRow.append(currentDeleteBtn);


    let currentHistoryBtn = document.createElement('span');
    currentHistoryBtn.innerHTML = '<i class="fas fa-info"></i>'
    currentHistoryBtn.setAttribute('class', 'table-column info i');
    currentRow.append(currentHistoryBtn);
  }
}

let init = () => {

  if (localStorage.getItem('contacts')) {
    contacts = JSON.parse(localStorage.getItem('contacts'));
  }
  refreshDOMTable();
}

init();