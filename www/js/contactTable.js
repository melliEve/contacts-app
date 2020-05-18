let contacts = [];
class AllContacts {
  constructor(contacts, listeners) {
    this.contacts = contacts;
    this.listeners = listeners;
  }

  editContact = (dataKey) => {
    let contactToEdit = {
      name: document.querySelector('#input-name').value,
      phone: document.querySelector('#input-phone').value,
      email: document.querySelector('#input-email').value
    };

    let contact = contacts[dataKey];
    contact.history.push(contactToEdit)
    contact.position++;

    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.enableDisableEditContactDetails('disable');
    this.refreshDOMTable();
  };

  enableDisableEditContactDetails = (option, key) => {
    let newContactName = document.querySelector('#newContactName');
    let newContactPhone = document.querySelector('#newContactPhone');
    let newContactEmail = document.querySelector('#newContactEmail');
    newContactName.value = '';
    newContactPhone.value = '';
    newContactEmail.value = '';

    let editContact = document.querySelector('#editContact');
    editContact.className = `${option}-editContact`;
    editContact.setAttribute('data-index', key)
  };

  // only push to inside refreshDOMTable because that function 
  // also kills the old listeners each time it runs
  refreshDOMTable = () => {
    let tableContainer = document.querySelector('#tableContainer');
    let oldTableBody = document.querySelector('#tableBody');
    oldTableBody.setAttribute('id', 'tableBody');
    oldTableBody.remove();
    let newTableBody = document.createElement('span');
    newTableBody.setAttribute('id', 'tableBody');
    let historyBody = document.createElement('div');
    historyBody.setAttribute('class', 'historyBody')
    tableContainer.append(historyBody)
    tableContainer.append(newTableBody);



    for (let i = 0; i < contacts.length; i++) {
      let currentRow = document.createElement('div');
      currentRow.className = 'table-row';
      currentRow.setAttribute('data-index', i);
      currentRow.setAttribute('data-parent', contacts[i].id);

      let currentName = document.createElement('div');
      currentName.className = 'table-column name';
      currentName.innerHTML = contacts[i].history[contacts[i].position].name;
      currentRow.append(currentName);


      let currentPhone = document.createElement('div');
      currentPhone.className = 'table-column phone';
      currentPhone.innerHTML = contacts[i].history[contacts[i].position].phone;
      currentRow.append(currentPhone);

      let currentEmail = document.createElement('div');
      currentEmail.className = 'table-column email';
      currentEmail.innerHTML = contacts[i].history[contacts[i].position].email;
      currentRow.append(currentEmail);
      newTableBody.append(currentRow);

      // Create edit button
      let currentEditBtn = document.createElement('div');
      currentEditBtn.className = 'table-column edit i';
      currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
      currentRow.append(currentEditBtn);

      // Create delete button
      let currentDeleteBtn = document.createElement('div');
      currentDeleteBtn.className = 'table-column delete i';
      currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
      currentRow.append(currentDeleteBtn);

      // create history button
      let currentContactHistory = document.createElement('div');
      currentContactHistory.className = 'table-column history i';
      currentContactHistory.innerHTML = '<i class="fas fa-info"></i>';
      currentRow.append(currentContactHistory);
    }

    let enableAndDisableNewContactModal = (option) => {
      let newContactName = document.querySelector('#newContactName');
      let newContactPhone = document.querySelector('#newContactPhone');
      let newContactEmail = document.querySelector('#newContactEmail');
      newContactName.value = '';
      newContactPhone.value = '';
      newContactEmail.value = '';

      let newContactModal = document.querySelector('#newContactModal');
      let backdrop = document.querySelector('#backdrop');


      newContactModal.className = `${option}-modal`;
      backdrop.className = `${option}-modal`;
    };

    // kill all old listeners
    while (listeners.length) {
      unlisten(listeners.pop());
    }

    // Listen to add new Contact button
    listeners.push(listen('click', '#addNewEntry', (e, input) => {
      let inputs = [...document.querySelectorAll('#newContactModal input')];
      for (input of inputs) { input.className = ''; }
      if (e.target.closest('#addNewEntry')) {
        enableAndDisableNewContactModal('enable');
      };
    }));

    let createNewContact = () => {
      let newContactName = document.querySelector('#newContactName').value;
      let newContactPhone= document.querySelector('#newContactPhone').value;
      let newContactEmail = document.querySelector('#newContactEmail').value;

      if (newContactName === '')
        document.querySelector('#newContactName').className = 'input-error';
      else
        document.querySelector('#newContactName').className = '';
      if (newContactPhone === '')
        document.querySelector('#newContactPhone').className = 'input-error';
      else
        document.querySelector('#newContactPhone').className = '';
      if (newContactEmail === '')
        document.querySelector('#newContactEmail').className = 'input-error';
      else
        document.querySelector('#newContactEmail').className = '';
      if (newContactName !== '') {

        let newContact = {
          'name': newContactName,
          'phone': [newContactPhone],
          'email': [newContactEmail],
        };

        let newEntry = {
          id: Date.now(),
          position: 0,
          history: [newContact]
        }

        contacts = [
          ...contacts,
          newEntry
        ];

        localStorage.setItem("contacts", JSON.stringify(contacts));
        enableAndDisableNewContactModal('disable');
        this.refreshDOMTable();
      };
    };

    // Listen to Contact submit button
    listeners.push(listen('click', '#newContactSaveBtn', e => {
      if (e.target.closest('#newContactSaveBtn')) {
        createNewContact();
      };
    }));


    // Listen to cancel new Contact button
    listeners.push(listen('click', '#newContactCancelBtn', e => {
      if (e.target.closest('#newContactCancelBtn')) {
        enableAndDisableNewContactModal('disable');
      }
    }));

    // Listen to edit button
    listeners.push(listen('click', '.edit', (e, input) => {
      let inputs = [...document.querySelectorAll('#newContactModal input')];
      for (input of inputs) { input.className = ''; }
      let contactToEdit = e.target.closest('.table-row').getAttribute('data-index');
      let id = e.target.closest('.table-row').getAttribute('data-parent')

      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      })
      contact = contact[0]
      let contactEdited = contact.history[contact.position];

      this.enableDisableEditContactDetails('enable', contactToEdit);
      let newContactName = document.querySelector('#input-name');
      let newContactPhone = document.querySelector('#input-phone');
      let newContactEmail = document.querySelector('#input-email');
      newContactName.value = contactEdited.name;
      newContactPhone.value = contactEdited.phone;
      newContactEmail.value = contactEdited.email;
    }));

    // Listen to edit Contact submit button
    listeners.push(listen('click', '#editSubmitBtn', e => {
      if (e.target.closest('#editSubmitBtn')) {
        e.preventDefault();
        let dataKeyHolder = document.querySelector('#editContact');
        let dataKey = dataKeyHolder.getAttribute('data-index');

        this.editContact(dataKey);
      }
    }));

    // Listen to cancel edit Contact button
    listeners.push(listen('click', '#editCancelBtn', e => {
      if (e.target.closest('#editCancelBtn')) {
        e.preventDefault();
        this.enableDisableEditContactDetails('disable');
      }
    }));


    // listen to add phone input button
    listeners.push(listen('click', '.btn-add-more-phone', e => {
      const addMorePhonenumbers = (e) => {
        let counter = 1;
        for (let i = 0; i < 3; i++) {
          counter++
        }
        let myRow = document.querySelector('#id-row-phone');
        let inputfieldMorePhonenumber = document.createElement('input');
        inputfieldMorePhonenumber.setAttribute('type', 'text');
        inputfieldMorePhonenumber.setAttribute('value', '');
        inputfieldMorePhonenumber.setAttribute('id', `${counter}`);
        inputfieldMorePhonenumber.setAttribute('class', 'newContactPhone');
        myRow.append(inputfieldMorePhonenumber);
      }
      if (e.target.closest('.btn-add-more-phone')) {
        addMorePhonenumbers();
      }
    }));

    // add more email input
    listeners.push(listen('click', '.btn-add-more-email', e => {
      const addMoreEmail = (e) => {
        let myRow = document.querySelector('#id-row-email');
        let inputfieldMoreEmail = document.createElement('input');
        inputfieldMoreEmail.setAttribute('type', 'text');
        inputfieldMoreEmail.setAttribute('value', '');
        inputfieldMoreEmail.setAttribute('id', 'newContactEmail');
        inputfieldMoreEmail.setAttribute('class', 'newContactEmail');
        myRow.append(inputfieldMoreEmail);
        console.log('add email', inputfieldMoreEmail);
      }
      if (e.target.closest('.btn-add-more-email')) {
        addMoreEmail();

      }
    }));


    // Delete contact
    let deleteUserFromTable = (i) => {
      contacts = contacts.filter((contact, index) => index != i);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      this.refreshDOMTable();
    }

    // Listen to delete button
    listeners.push(listen('click', '.delete', e => {
      let contactToDelete = e.target.closest('.table-row').getAttribute('data-index');
      let confirmDelete = window.confirm('Är du säker att du vill ta bort denna kontakt?');

      if (confirmDelete)
        deleteUserFromTable(contactToDelete);
    }));

    // // Listen to Contact history info button
    listeners.push(listen('click', '.history', e => {
      let contactToShow = e.target.closest('.table-row').getAttribute('data-index');
      let id = e.target.closest('.table-row').getAttribute('data-parent')
      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      })
      contact = contact[0];

      // fill historyBody with all versions
      let historyBody = document.querySelector('.historyBody')
      let chosen = parseInt(contact.position);
      let chosenId = contact.id;


      function contactHistoryCard(data, index) {
        console.log(data);

        return `
        <div class="contactHistoryCard${index === chosen ? ' chosen' : ''}" data-key="${index}">
          <div class="${index === chosen ? '' : 'hidden'}">
          </div>
          <h2>Namn: ${data.name}</h2>
          <p class="${!data.phone ? 'hidden' : ''}">
            <span>Telefonnummer:</span>
            ${data.phone}
          </p>
          <p class="${!data.email ? 'hidden' : ''}">
            <span>Email:</span>
            ${data.email}
          </p>
          <a class="cancelHistoryChange">Avbryt</a>
          <a data-ref="${chosenId}" data-key="${index}" class="contactHistoryCardButton ${(index === chosen ? 'hidden' : 'd')}">Välj</a>
        </div>
        `
      }

      let html = ``;
      contact.history.map((version, index) => {
        html += contactHistoryCard(version, index)
      })

      // And push it into the history div
      historyBody.innerHTML = html
    }));

    // Listen for contactHistoryCard buttons to set the new version
    listen('click', '.contactHistoryCardButton', e => {
      let id = e.target.getAttribute('data-ref')
      let newPositionKey = e.target.getAttribute('data-key')

      let contact = contacts.filter(contact => {
        if (contact.id == id) {
          return contact;
        }
      });

      // Update contact position and save
      contact[0].position = newPositionKey
      localStorage.setItem("contacts", JSON.stringify(contacts));

      // Also clear the contents of historyBody
      historyBody.innerHTML = ''
      this.refreshDOMTable();
    })

    listen('click', '.cancelHistoryChange', e => {
      historyBody.innerHTML = ''
    })

    // Listen to cancel history modal button
    listeners.push(listen('click', '#historyCancelBtn', e => {
      if (e.target.closest('#historyCancelBtn')) {
        e.preventDefault();
      }
    }));
  };

};

new AllContacts();



