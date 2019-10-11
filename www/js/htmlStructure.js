
let body = document.querySelector('body');

let header = document.createElement('h1');
header.innerHTML = "kontakter";
body.append(header);

//create container
let container = document.createElement('container');
container.innerHTML = '';
body.append(container);
container.setAttribute('class', 'table-container');
container.setAttribute('id', 'tableContainer');

//create row inside container
let row1 = document.createElement('div');
row1.innerHTML = '';
container.append(row1);
row1.setAttribute('class', 'table-row');

let searchInputLabel = document.createElement('label');
searchInputLabel.innerHTML = 'search input';
row1.append(searchInputLabel);
searchInputLabel.setAttribute('for', 'searchContact');

let form = document.createElement('form');
form.innerHTML = '';
row1.append(form);
form.setAttribute('name', 'myForm');

let searchInput = document.createElement('input');
searchInput.innerHTML = '';
form.append(searchInput);
searchInput.setAttribute('type', 'search');
searchInput.setAttribute('id', 'searchContact');

let searchInputBtn = document.createElement('button');
searchInputBtn.innerHTML = 'sök';
row1.append(searchInputBtn);
searchInputBtn.setAttribute('id', 'searchContactBtn');

//create row inside container
let row = document.createElement('div');
row.innerHTML = '';
container.append(row);
row.setAttribute('class', 'table-row');

//create columns inside row
let headerName = document.createElement('div');
headerName.innerHTML = 'Namn';
row.append(headerName);
headerName.setAttribute('class', 'table-column header name');

let headerPhone = document.createElement('div');
headerPhone.innerHTML = 'Telefonnummer';
row.append(headerPhone);
headerPhone.setAttribute('class', 'table-column header phone');

let headerEmail = document.createElement('div');
headerEmail.innerHTML = 'Email';
row.append(headerEmail);
headerEmail.setAttribute('class', 'table-column header email');

let addNewEntry = document.createElement('div');
addNewEntry.innerHTML = '+';
row.append(addNewEntry);
addNewEntry.setAttribute('class', 'table-column header add-entry-column');
addNewEntry.setAttribute('id', 'addNewEntry');

let tableBody = document.createElement('span');
tableBody.innerHTML = '';
row.append(tableBody); //or should it be container.append(tableBody);
tableBody.setAttribute('id', 'tableBody');

//modal beginns here
let modalBackdrop = document.createElement('div');
modalBackdrop.innerHTML = '';
body.append(modalBackdrop);
modalBackdrop.setAttribute('class', 'disable-modal');
modalBackdrop.setAttribute('id', 'backdrop');

let newPersonModal = document.createElement('div');
newPersonModal.innerHTML = '';
body.append(newPersonModal);
newPersonModal.setAttribute('class', 'disable-modal');
newPersonModal.setAttribute('id', 'newPersonModal');

let modalHeader = document.createElement('h4');
modalHeader.innerHTML = 'Lägg till ny kontakt';
newPersonModal.append(modalHeader);

//name
let nameInputLabel = document.createElement('label');
nameInputLabel.innerHTML = 'Namn';
newPersonModal.append(nameInputLabel);
nameInputLabel.setAttribute('for', 'newPersonName');

let nameInput = document.createElement('input');
nameInput.innerHTML = '';
newPersonModal.append(nameInput);
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'newPersonName');

//phone number
let numberInputLabel = document.createElement('label');
numberInputLabel.innerHTML = 'Telefonnummer';
newPersonModal.append(numberInputLabel);
numberInputLabel.setAttribute('for', 'newPersonPhone');

let numberInput = document.createElement('input');
numberInput.innerHTML = '';
newPersonModal.append(numberInput);
numberInput.setAttribute('type', 'text');
numberInput.setAttribute('id', 'newPersonPhone');

//email
let emailInputLabel = document.createElement('label');
emailInputLabel.innerHTML = 'Email';
newPersonModal.append(emailInputLabel);
emailInputLabel.setAttribute('for', 'newPersonEmail');

let emailInput = document.createElement('input');
emailInput.innerHTML = '';
newPersonModal.append(emailInput);
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('id', 'newPersonEmail');


let cancelBtn = document.createElement('button');
cancelBtn.innerHTML = "Avbryt";
newPersonModal.append(cancelBtn);
cancelBtn.setAttribute('id', 'newPersonCancelBtn');

let saveBtn = document.createElement('button');
saveBtn.innerHTML = "Spara";
newPersonModal.append(saveBtn);
saveBtn.setAttribute('id', 'newPersonSaveBtn');

//clear local storage btn
let clearBtn = document.createElement('button');
clearBtn.innerHTML = "rensa";
body.append(clearBtn);
clearBtn.setAttribute('id', 'clearBtn');

clearBtn.addEventListener('click', e => {
  localStorage.removeItem(tableKey);
  if (e.target.closest('#clearBtn')) {
    console.log('clicked to delete local storage');
  }
})


