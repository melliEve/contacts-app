
contacts = [];
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

let deleteContactFromList = (i) => {
  contacts = contacts.filter((contact, index) => index != i)

  localStorage.setItem('contacts', JSON.stringify(contacts));
  refreshDOMTable();
}

deleteListener = listen('click', '.delete', e => {
  let contactToDelete = e.target.closest('.table-row').getAttribute('contact-index');
  let isSure = window.confirm('är du säkert att du vill ta bort ' + contacts[contactToDelete].name + ' från listan?')
  if (isSure) {
    deleteContactFromList(contactToDelete);
  }
});

editListener = listen('click', '.edit', e => {

  document.querySelector('#modalHeader').innerHTML = "Redigera kontakten";

  //remove previous error styling
  let inputs = [...document.querySelectorAll('#newPersonModal input')];
  for (input of inputs) { input.className = ''; }

  //grab the current contact
  let indexToEdit = e.target.closest('.table-row').getAttribute('contact-index');
  let personToEdit = contacts[indexToEdit];
  enableDisableNewUserModal('.enable');
  let newPersonName = document.querySelector('#newPersonName');
  newPersonName.value = personToEdit.name;
  let newPersonPhone = document.querySelector('#newPersonPhone');
  newPersonPhone.value = personToEdit.phone;
  let newPersonEmail = document.querySelector('#newPersonEmail');
  newPersonEmail.value = personToEdit.email;
  newPersonName.parentElement.setAttribute('contact-index', indexToEdit)
});

addEntryListener = listen('click', '#addNewEntry', () => {
  document.querySelector('#modalHeader').innerHTML = "Lägg till ny kontakt";
  //remove previous error styling
  let inputs = [...document.querySelectorAll('#newPersonModal input')];
  for (input of inputs) { input.className = ''; }

  newPersonName.parentElement.setAttribute('contact-index', '');

  enableDisableNewUserModal('enable');
  refreshDOMTable();
});

saveBtnListener = listen('click', '#newPersonSaveBtn', () => {
  let newPersonName = document.querySelector('#newPersonName').value.trim();
  let newPersonPhone = document.querySelector('#newPersonPhone').value.trim();
  let newPersonEmail = document.querySelector('#newPersonEmail').value.trim();

  if (newPersonName === '')
    document.querySelector('#newPersonName').className = 'input-err';
  else
    document.querySelector('#newPersonName').className = '';

  if (newPersonName !== '' || newPersonPhone !== '' || newPersonEmail !== '') {
    let newPerson = new Person(newPersonName, newPersonPhone, newPersonEmail);

    let indexToEdit = document.querySelector('#newPersonModal').getAttribute('contact-index');
    if (indexToEdit !== '') {
      //save changes

      let personToEdit = contacts[indexToEdit];

      let oldContact = createHistoryContact(personToEdit.name, personToEdit.phone, personToEdit.email, personToEdit.id);
      let newContactInHistory = createHistoryContact(newPerson.name, newPerson.phone, newPerson.email, newPerson.id);
      newPerson.history = [...personToEdit.history, oldContact, newContactInHistory];

      contacts[indexToEdit] = newPerson;
    } else {
      //add new contact
      contacts = [
        ...contacts,
        newPerson
      ];
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
    enableDisableNewUserModal('disable');
    refreshDOMTable(console.log('saved to localStorage'));
  }
});

cancelBtnListener = listen('click', '#newPersonCancelBtn', e => {
  enableDisableNewUserModal('disable')
});

returnBtn = listen('click', '#returnBtn', () => {
  window.location.reload();
  console.log('works?');

})