body = document.querySelector('body')

const tableKey = 'table';

let table;
let tableDemo = {
  'Bobby Jones': {
    'phone': '076-05-83-093',
    'email': 'mel@hotmail.com'
  },
  'Robbie Jones': {
    'phone': '078-05-88-098',
    'email': 'mello@yahoo.com'
  }
}

let refreshDOMTable = () => {
  
  table = tableDemo;

  let tableKeys = Object.keys(table); //[Bobby, Robbie]
 
  let tableContainer = document.getElementById('tableContainer');
  let oldTableBody = document.getElementById('tableBody');
  //tableContainer.remove(oldTableBody);
  let newTableBody = document.createElement('span');
  newTableBody.setAttribute('id', 'tableBody');


  for (let i = 0; i < tableKeys.length; i++) {
    let currentRow = document.createElement('div');
    currentRow.setAttribute('class', 'table-row');

    let currentNameColumn = document.createElement('div');
    currentNameColumn.setAttribute('class', 'table-column name');

    let currentPhoneColumn = document.createElement('div');
    currentPhoneColumn.setAttribute('class', 'table-column phone')

    let currentEmailColumn = document.createElement('div');
    currentEmailColumn.setAttribute('class', 'table-column email');

    let currentEditBtn = document.createElement('span');
    currentEditBtn.setAttribute('class', 'table-column edit i');

    let currentDeleteBtn = document.createElement('span');
    currentDeleteBtn.setAttribute('class', 'table-column delete i');

    currentNameColumn.innerHTML = tableKeys[i];
    currentPhoneColumn.innerHTML = table[tableKeys[i]].phone;
    currentEmailColumn.innerHTML = table[tableKeys[i]].email;

    currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>'
    currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

    currentRow.append(currentNameColumn);
    currentRow.append(currentPhoneColumn);
    currentRow.append(currentEmailColumn);
    currentRow.append(currentEditBtn);
    currentRow.append(currentDeleteBtn);
    newTableBody.append(currentRow);
  }

  let enableDisableNewUserModal = (option) => {
    let newPersonName = document.getElementById('newPersonName');
    let newPersonPhone = document.getElementById('newPersonPhone');
    let newPersonEmail = document.getElementById('newPersonEmail');
    newPersonName.value = '';
    newPersonPhone.value = '';
    newPersonEmail.value = '';

    let newPersonModal = document.getElementById('newPersonModal');
    let backdrop = document.getElementById('backdrop');

    newPersonModal.setAttribute('class', `${option}-modal`);
    backdrop.setAttribute('class', `${option}-modal`);
  }

  let addNewEntryBtn = document.getElementById('addNewEntry');
  let editBtns = document.getElementsByClassName('edit');
  let deleteBtns = document.getElementsByClassName('delete');

  let cancelBtn = document.getElementById('newPersonCancelBtn');
  
  let saveBtn = document.getElementById('newPersonSaveBtn');
  saveBtn.addEventListener('click', () => {

    let newPersonName = document.getElementById('newPersonName').value.trim();
    let newPersonPhone = document.getElementById('newPersonPhone').value.trim();
    let newPersonEmail = document.getElementById('newPersonEmail').value.trim();

    if (newPersonName === '')
      newPersonName.className = 'input-err';
    else newPersonName.className = '';

    if (newPersonPhone === '')
      newPersonPhone.className = 'input-err';
    else newPersonPhone.className = '';

    if (newPersonEmail === '')
      newPersonEmail.className = 'input-err';
    else newPersonEmail.className = '';

    if (newPersonName !== '' && newPersonPhone !== '' && newPersonEmail !== '') {
      let newPerson = {};
      table[newPersonName] = {
        'phone': newPersonPhone,
        'email': newPersonEmail
      }
      localStorage.setItem(tableKey, JSON.stringify(table));
      enableDisableNewUserModal('disable');
      console.log('hi 1')
      refreshDOMTable();
    }
  });

  addNewEntryBtn.addEventListener('click', () => {
    enableDisableNewUserModal('enable');
    refreshDOMTable();

  });

}
refreshDOMTable(console.log('hi 3'));