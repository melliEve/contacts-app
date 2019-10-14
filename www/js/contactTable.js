//body = document.querySelector('body')

const tableKey = 'table';

contacts = [];
// let tableDemo = {
  //   'Bobby Jones': {
    //     'phone': '076-05-83-093',
    //     'email': 'mel@hotmail.com'
    //   },
    //   'Robbie Jones': {
      //     'phone': '078-05-88-098',
      //     'email': 'mello@yahoo.com'
      //   }
      // }

let refreshDOMTable = () => {
  console.log(contacts);

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
  }
}

let init = () => {

  if (localStorage.getItem(tableKey)) {
    contacts = JSON.parse(localStorage.getItem(tableKey));
  }
  else {
   // table = tableDemo;
    localStorage.setItem(tableKey, JSON.stringify(contacts))
  }
  refreshDOMTable();
}

init();