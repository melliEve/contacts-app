// DOM element begin
let body = document.querySelector('body');

// Wrap Div
let wrapperDiv = document.createElement('div');
wrapperDiv.innerHTML = '';
body.append(wrapperDiv);
wrapperDiv.setAttribute('class', 'wrapperDiv');
wrapperDiv.setAttribute('id', 'wrapper');

// Page headline
let headerDiv = document.createElement('h1');
headerDiv.innerHTML = 'Mina Kontakter';
wrapperDiv.append(headerDiv);
headerDiv.setAttribute('class', 'pageHeader');

// div container
let container = document.createElement('container');
container.innerHTML = '';
wrapperDiv.append(container);
container.setAttribute('class', 'table-container');
container.setAttribute('id', 'tableContainer');


// create a row
let row = document.createElement('div');
row.innerHTML = '';
container.append(row);
row.setAttribute('class', 'table-row');
row.setAttribute('id', 'tableRow');


// name column
let nameColumn = document.createElement('div');
nameColumn.innerHTML = 'Namn';
row.append(nameColumn);
nameColumn.setAttribute('class', 'table-column name');
nameColumn.setAttribute('route', '/');

// number column
let phoneColumn = document.createElement('div');
phoneColumn.innerHTML = 'Telefonnummer';
row.append(phoneColumn);
phoneColumn.setAttribute('class', 'table-column phone');
phoneColumn.setAttribute('id', 'list');

// email column
let emailColumn = document.createElement('div');
emailColumn.innerHTML = 'Email';
row.append(emailColumn);
emailColumn.setAttribute('class', 'table-column email');
emailColumn.setAttribute('id', 'list');

// add new number
let addEntry = document.createElement('div');
addEntry.innerHTML = '+';
row.append(addEntry);
addEntry.setAttribute('class', 'table-column add-entry');
addEntry.setAttribute('id', 'addNewEntry');

// table body
let span = document.createElement('span');
span.innerHTML = '';
row.append(span);
span.setAttribute('id', 'tableBody');

// add new contact modal 
let backdrop = document.createElement('div');
backdrop.innerHTML = '';
wrapperDiv.append(backdrop);
backdrop.setAttribute('class', 'disable-modal');
backdrop.setAttribute('id', 'backdrop');

let newContactModal = document.createElement('div');
newContactModal.innerHTML = '';
wrapperDiv.append(newContactModal);
newContactModal.setAttribute('class', 'disable-modal');
newContactModal.setAttribute('id', 'newContactModal');

let modalHeader = document.createElement('h2');
modalHeader.innerHTML = 'Lägg till ny kontakt';
newContactModal.append(modalHeader);
modalHeader.setAttribute('class', 'modalHeader');

// name label
let newContactNameLabel = document.createElement('label');
newContactNameLabel.innerHTML = 'Namn';
newContactModal.append(newContactNameLabel);
newContactNameLabel.setAttribute('for', 'newContactName');

let newContactNameInput = document.createElement('input');
newContactModal.append(newContactNameInput);
newContactNameInput.setAttribute('type', 'text');
newContactNameInput.setAttribute('id', 'newContactName');

// phone label
let newContactPhoneLabel = document.createElement('label');
newContactPhoneLabel.innerHTML = 'Telefonnummer';
newContactModal.append(newContactPhoneLabel);
newContactPhoneLabel.setAttribute('for', 'newContactPhone');

let newContactEmailDiv = document.createElement('div');
newContactModal.append(newContactEmailDiv);

let newContactPhoneInput = document.createElement('input');
newContactPhoneInput.innerHTML = '';
newContactEmailDiv.append(newContactPhoneInput);
newContactPhoneInput.setAttribute('type', 'text');
newContactPhoneInput.setAttribute('id', 'newContactPhone');

// to add another number input row
let addNumberBtn = document.createElement('button');
addNumberBtn.innerHTML = '+';
newContactEmailDiv.append(addNumberBtn);
addNumberBtn.setAttribute('class', 'table-column header add-number');
addNumberBtn.setAttribute('id', 'addNumberBtn');

// email label
let newContactEmailLabel = document.createElement('label');
newContactEmailLabel.innerHTML = 'Email';
newContactModal.append(newContactEmailLabel);
newContactEmailLabel.setAttribute('for', 'newContactEmail');

let newContactEmailDiv = document.createElement('div');
newContactModal.append(newContactEmailDiv);

let newContactEmailInput = document.createElement('input');
newContactEmailInput.innerHTML = '';
newContactModal.append(newContactEmailInput);
newContactEmailInput.setAttribute('type', 'text');
newContactEmailInput.setAttribute('id', 'newContactEmail');

// to add another email input row
let addEmailInput = document.createElement('button');
addEmailInput.innerHTML = '+';
newContactEmailInput.append(addEmailInput);
addEmailInput.setAttribute('class', 'table-column header add-email');
addEmailInput.setAttribute('id', 'addEmailInput');

// modal save button
let newContactSaveBtn = document.createElement('button');
newContactSaveBtn.innerHTML = 'Spara';
newContactModal.append(newContactSaveBtn);
newContactSaveBtn.setAttribute('id', 'newContactSaveBtn');
newContactSaveBtn.setAttribute('class', 'disable-button');

// modal cancel button 
let modalButtonCancel = document.createElement('button');
modalButtonCancel.innerHTML = 'Avbryt';
newContactModal.append(modalButtonCancel);
modalButtonCancel.setAttribute('id', 'newContactCancelBtn');

// edit contact modal begins here and push it to history 
let editContact = document.createElement('div');
editContact.innerHTML = '';
wrapperDiv.append(editContact);
editContact.setAttribute('class', 'disable-editContact');
editContact.setAttribute('id', 'editContact');


let editContactDetails = document.createElement('div');
editContactDetails.innerHTML = '';
editContact.append(editContactDetails);
editContactDetails.setAttribute('class', 'editContactDetails');

// edit contact modal header
let editContactHeader = document.createElement('h1');
editContactHeader.innerHTML = 'Redigera kontakt';
editContactDetails.append(editContactHeader);
editContactHeader.setAttribute('class', 'editContactHeader');

// edit contact form begins
let editContactForm = document.createElement('form');
editContactForm.innerHTML = '';
editContactDetails.append(editContactForm);
editContactForm.setAttribute('id', 'editContactForm');

// edit name 
let editFormName = document.createElement('div');
editFormName.innerHTML = '';
editContactForm.append(editFormName);

let editNameLabel = document.createElement('label');
editNameLabel.innerHTML = 'Namn';
editFormName.append(editNameLabel);
editNameLabel.setAttribute('for', 'input-name');

let editNameInput = document.createElement('input');
editNameInput.innerHTML = '';
editFormName.append(editNameInput);
editNameInput.setAttribute('type', 'text');
editNameInput.setAttribute('id', 'input-name');

// edit phone number
let editFormPhone = document.createElement('div');
editFormPhone.innerHTML = '';
editContactForm.append(editFormPhone);
editFormPhone.setAttribute('class', 'form-box-error');
editFormPhone.setAttribute('data-error-msg', '');

let editPhoneLabel = document.createElement('label');
editPhoneLabel.innerHTML = 'Telefonnummer';
editFormPhone.append(editPhoneLabel);
editPhoneLabel.setAttribute('for', 'input-phone');

let editPhoneInput = document.createElement('input');
editPhoneInput.innerHTML = '';
editFormPhone.append(editPhoneInput);
editPhoneInput.setAttribute('type', 'text');
editPhoneInput.setAttribute('id', 'input-phone');

// edit email
let editFormEmail = document.createElement('div');
editFormEmail.innerHTML = '';
editContactForm.append(editFormEmail);
editFormEmail.setAttribute('class', 'form-box-error');
editFormEmail.setAttribute('data-error-msg', '');

let editContactEmailLabel = document.createElement('label');
editContactEmailLabel.innerHTML = 'Email';
editFormEmail.append(editContactEmailLabel);
editContactEmailLabel.setAttribute('for', 'input-email');

let editContactEmailInput = document.createElement('input');
editContactEmailInput.innerHTML = '';
editFormEmail.append(editContactEmailInput);
editContactEmailInput.setAttribute('type', 'text');
editContactEmailInput.setAttribute('id', 'input-email');

// edit submit button
let editSubmitButton = document.createElement('button');
editSubmitButton.innerHTML = 'Spara';
editContactForm.append(editSubmitButton);
editSubmitButton.setAttribute('id', 'editSubmitBtn');
editSubmitButton.setAttribute('class', 'disable-button');

// edit cancel button
let editCancelButton = document.createElement('button');
editCancelButton.innerHTML = 'Avbryt';
editContactForm.append(editCancelButton);
editCancelButton.setAttribute('id', 'editCancelBtn');



