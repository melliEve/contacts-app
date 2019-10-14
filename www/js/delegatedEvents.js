//const tableKey = 'table';
let contacts = [];
// We use a self executing function "our own private universe"
// and export the things we want to be public
const [listen, unlisten] = (() => {
  let listeningOnType = {};
  let listeners = [];

  function listen(eventType, cssSelector, func) {
    // Register a "listener"
    let listener = { eventType, cssSelector, func };
    listeners.push(listener);
    // If no listener on window[eventType] register  a real/raw js-listener
    if (!listeningOnType[eventType]) {
      // add event listener for this type on the whole window
      window.addEventListener(eventType, e => {
        listeners
          .filter(x => x.eventType === eventType)
          .forEach(listener => {
            if (e.target.closest(listener.cssSelector)) {
              listener.func(e);
            }
          });
      });
      listeningOnType[eventType] = true;
    }
    return listener;
  }

  function unlisten(listener) {
    listeners.splice(listeners.indexOf(listener), 1);
  }

  return [listen, unlisten];
})();

let deleteContactFromList = (userName) => {
  let tempTable = {};
  let tableKeys = Object.keys(contacts);
  for (let i = 0; i < tableKeys.length; i++) {
    if (userName !== tableKeys[i]) {
      tempTable[tableKeys[i]] = contacts[tableKeys[i]];
    }
  }
  contacts = tempTable;
  localStorage.setItem(tableKey, JSON.stringify(contacts));
  refreshDOMTable(console.log('!!??!?!?!??!'));
}

deleteListener = listen('click', '.delete', e => {
  let contactToDelete = e.target.parentElement.children[0].innerText;
  let isSure = window.confirm('är du säkert att du vill ta bort ' + contactToDelete + ' från listan?')
  if (isSure) {
    deleteContactFromList(contactToDelete);
    console.log('contactToDelete', contactToDelete);

  }
});

editListener = listen('click', '.edit', e => {

  let indexToEdit = e.target.closest('.table-row').getAttribute('contact-index');
  let personToEdit = contacts[indexToEdit];
  enableDisableNewUserModal('enable');
  let newPersonName = document.querySelector('#newPersonName');
  let newPersonPhone = document.querySelector('#newPersonPhone');
  let newPersonEmail = document.querySelector('#newPersonEmail');
  newPersonName.value = personToEdit.name;
  newPersonPhone.value = personToEdit.phone;
  newPersonEmail.value = personToEdit.email;
  newPersonName.parentElement.setAttribute('contact-index', indexToEdit)
});

addEntryListener = listen('click', '#addNewEntry', () => {
  //remove previous error styling
  let inputs = [...document.querySelectorAll('#newPersonModal input')];
  for (input of inputs) { input.className = ''; }
  enableDisableNewUserModal('enable');
  refreshDOMTable();
});

savBtnListener = listen('click', '#newPersonSaveBtn', () => {
  let newPersonName = document.querySelector('#newPersonName').value.trim();
  let newPersonPhone = document.querySelector('#newPersonPhone').value.trim();
  let newPersonEmail = document.querySelector('#newPersonEmail').value.trim();

  if (newPersonName === '')
    document.querySelector('#newPersonName').className = 'input-err';
  else
    document.querySelector('#newPersonName').className = '';

  if (newPersonPhone === '')
    document.querySelector('#newPersonPhone').className = 'input-err';
  else
    document.querySelector('#newPersonPhone').className = '';

  if (newPersonEmail === '')
    document.querySelector('#newPersonEmail').className = 'input-err';
  else
    document.querySelector('#newPersonEmail').className = '';

  if (newPersonName !== '' && newPersonPhone !== '' && newPersonEmail !== '') {
    let newPerson = {
      'name': newPersonName,
      'phone': newPersonPhone,
      'email': newPersonEmail
    }

    contacts = [
      ...contacts,
      newPerson
    ];
    
    localStorage.setItem(tableKey, JSON.stringify(contacts));
    enableDisableNewUserModal('disable');
    refreshDOMTable(console.log('saved to localStorage'));
  }
});

cancelBtnListener = listen('click', '#newPersonCancelBtn', e => {
  enableDisableNewUserModal('disable')
});



