
let body = document.querySelector('body');

let header = document.createElement('h1');
header.innerHTML = "kontakter";
body.append(header);

//create container
let container = document.createElement('section');
container.innerHTML = '';
body.append(container);
container.setAttribute('class', 'table-container');
container.setAttribute('id', 'tableContainer');

//create row inside container
let row1 = document.createElement('div');
row1.innerHTML = '';
container.append(row1);
row1.setAttribute('class', 'table-row');

//create a table 
let table = document.createElement('table');
table.innerHTML = '';
container.append(table);
table.setAttribute('class', 'table-row');

//create columns inside row
let headerName = document.createElement('div');
headerName.innerHTML = 'Namn';
table.append(headerName);
headerName.setAttribute('class', 'table-column header name');

let headerPhone = document.createElement('div');
headerPhone.innerHTML = 'Telefonnummer';
table.append(headerPhone);
headerPhone.setAttribute('class', 'table-column header phone');

let headerEmail = document.createElement('div');
headerEmail.innerHTML = 'Email';
table.append(headerEmail);
headerEmail.setAttribute('class', 'table-column header email');

let addNewEntry = document.createElement('div');
addNewEntry.innerHTML = '+';
table.append(addNewEntry);
addNewEntry.setAttribute('class', 'table-column header add-entry-column');
addNewEntry.setAttribute('id', 'addNewEntry');

//TABLEBODY
let tableBody = document.createElement('span');
tableBody.innerHTML = '';
table.append(tableBody);
tableBody.setAttribute('id', 'tableBody');

// //history modal 
// let historyModalBackdrop = document.createElement('div');
// historyModalBackdrop.innerHTML = '';
// body.append(historyModalBackdrop);
// historyModalBackdrop.setAttribute('class', 'disable-modal');
// historyModalBackdrop.setAttribute('id', 'historyModalBackdrop');

// let historyModal = document.createElement('div');
// historyModal.innerHTML = '';
// body.append(historyModal);
// historyModal.setAttribute('class', 'disable-modal');
// historyModal.setAttribute('id', 'historyModal');

// let historyModalHeader = document.createElement('h4');
// historyModalHeader.innerHTML = 'visar kontakt';
// historyModal.append(historyModalHeader);
// historyModalHeader.setAttribute('class', 'modalHeader')

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
modalHeader.setAttribute('class', 'modalHeader')

//name
let nameInputLabel = document.createElement('label');
nameInputLabel.innerHTML = 'Namn';
newPersonModal.append(nameInputLabel);
nameInputLabel.setAttribute('for', 'newPersonName');
nameInputLabel.setAttribute('id', 'nameLabel');

let nameInput = document.createElement('input');
nameInput.innerHTML = '';
newPersonModal.append(nameInput);
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('value', '')
nameInput.setAttribute('id', 'newPersonName');

//phone number
let numberRow = document.createElement('div');
newPersonModal.append(numberRow);

let numberInputLabel = document.createElement('label');
numberInputLabel.innerHTML = 'Nummer';
numberRow.append(numberInputLabel);
numberInputLabel.setAttribute('for', 'newPersonPhone');
numberInputLabel.setAttribute('id', 'phoneLabel');

let numberInput = document.createElement('input');
numberInput.innerHTML = '';
numberRow.append(numberInput);
numberInput.setAttribute('type', 'text');
numberInput.setAttribute('id', 'newPersonPhone');

let addNumberInput = document.createElement('button');
addNumberInput.innerHTML = '+';
numberRow.append(addNumberInput);
addNumberInput.setAttribute('class', 'table-column header add-number-column');
addNumberInput.setAttribute('id', 'addNumberInput');

//email
let emailRow = document.createElement('div');
newPersonModal.append(emailRow);

let emailInputLabel = document.createElement('label');
emailInputLabel.innerHTML = 'Email';
emailRow.append(emailInputLabel);
emailInputLabel.setAttribute('for', 'newPersonEmail');
emailInputLabel.setAttribute('id', 'emailLabel');

let emailInput = document.createElement('input');
emailInput.innerHTML = '';
emailRow.append(emailInput);
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('id', 'newPersonEmail');

let addEmailInput = document.createElement('button');
addEmailInput.innerHTML = '+';
emailRow.append(addEmailInput);
addEmailInput.setAttribute('class', 'table-column header add-email-column');
addEmailInput.setAttribute('id', 'addEmailInput');


let cancelBtn = document.createElement('button');
cancelBtn.innerHTML = "Avbryt";
newPersonModal.append(cancelBtn);
cancelBtn.setAttribute('id', 'newPersonCancelBtn');

let saveBtn = document.createElement('button');
saveBtn.innerHTML = "Spara";
newPersonModal.append(saveBtn);
saveBtn.setAttribute('id', 'newPersonSaveBtn');

// let contactInfoCard = document.createElement('div');
// contactInfoCard.innerHTML = '';
// container.append(contactInfoCard);
// contactInfoCard.setAttribute('class','contactInfoCard');


