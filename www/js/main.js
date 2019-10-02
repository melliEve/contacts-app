let body = document.querySelector('body');

let header = document.createElement('h1');
header.innerHTML = "kontakter";
body.append(header);

let div = document.createElement('div');
div.innerHTML = '';
body.append(div);
div.setAttribute('class', 'table-container');

let div1 = document.createElement('row');
div1.innerHTML = '';
div.append(div1);
div1.setAttribute('class', 'table-row');

let div2 = document.createElement('div');
div2.innerHTML = 'Namn';
div1.append(div2);
div2.setAttribute('class', 'table-column header name');

let div3 = document.createElement('div');
div3.innerHTML = 'Nummer';
div1.append(div3);
div3.setAttribute('class', 'table-column header phone');

let div4 = document.createElement('div');
div4.innerHTML = 'Email';
div1.append(div4);
div4.setAttribute('class', 'table-column header email');

let span = document.createElement('span');
span.innerHTML = '';
div.append(span);
span.setAttribute('id', 'tableBody');

//modal beginns here
let div5 = document.createElement('div');
div5.innerHTML = '';
body.append(div5);
div5.setAttribute('class', 'disable-modal');
div5.setAttribute('id', 'backdrop');

let div6 = document.createElement('div');
div6.innerHTML = '';
body.append(div6);
div6.setAttribute('class', 'disable-modal');
div6.setAttribute('id', 'newPersonModal');

let addNewPerson = document.createElement('h4');
addNewPerson.innerHTML = 'Lägg till ny kontakt';
div6.append(addNewPerson);

let label = document.createElement('label');
label.innerHTML = 'Namn';
div6.append(label);
label.setAttribute('for', 'newPersonName');

let nameInput = document.createElement('input');
nameInput.innerHTML = 'name';
div6.append(nameInput);
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'newPersonName');


let label1 = document.createElement('label');
label1.innerHTML = 'Telefonnummer';
div6.append(label1);
label1.setAttribute('for', 'newPersonPhone');

let numberInput = document.createElement('input');
numberInput.innerHTML = 'phone';
div6.append(numberInput);
numberInput.setAttribute('type', 'text');
numberInput.setAttribute('id', 'newPersonPhone');

let label2 = document.createElement('label');
label2.innerHTML = 'Email';
div6.append(label2);
label2.setAttribute('for', 'newPersonEmail');

let emailInput = document.createElement('input');
emailInput.innerHTML = 'email';
div6.append(emailInput);
emailInput.setAttribute('type', 'text');
emailInput.setAttribute('id', 'newPersonEmail');

let cancelBtn = document.createElement('button');
cancelBtn.innerHTML = "Avbryt";
div6.append(cancelBtn);
cancelBtn.setAttribute('id', 'newPersonCancelBtn');

let saveBtn = document.createElement('button');
saveBtn.innerHTML = "Spara";
div6.append(saveBtn);
saveBtn.setAttribute('id', 'newPersonSaveBtn');
