contact = {};

document.body.addEventListener('click', e => {
  //need functionality for showing one contact
  let a = e.target.closest('a[href^="/"]');

  if (a) {
    window.history.pushState(null, null, a.getAttribute('href'));
    e.preventDefault();
    reactOnRoute();
  }
  let currentContact = e.target.closest('.table-row').getAttribute('.contact-index');
  let id = e.target.closest('.table-row').getAttribute('contact-parent');

  let contact = contacts.filter(contact => {    
    if (contact.id === id) {
      return contact;
    }
  })

  contact = contact[0];

  let historyInfoBody = document.querySelector('.contactInfo')
  let chosen = parseInt(contact.id);
  function displayContactCard(data, index) {
    console.log('hej', contact);
    console.log(contact.id);


    return `
    <div class="contactHistory ${index === chosen ? chosen : ''}" data-key="${index}">
      <div class="${index === chosen ? '' : 'hidden'}">
        >>> Aktuella versionen <<<
      </div>
      <h2>Namn: ${contact.name}</h2>
        <p class="${!contact.phone ? 'hidden' : ''}">
          <span>Telefon:</span>
          ${contact.phone}
        </p>
        <p class="${!contact.email ? 'hidden' : ''}">
        <span>Epost:</span>
        ${contact.email}
        </p>
        <a class="cancelHistoryChange">Avbryt</a>
        <a data-ref="${contact.id}" data-key="${index}" class="chose-version ${(index === chosen ? 'hidden' : 'd')}">Välj version </a>
    </div>`
  }

  let html = ``;
  contact.history.map((version, index) => {
    console.log('hoho');
    
    html += displayContactCard(version, index)
  })

  historyInfoBody.innerHTML = html;

});


function reactOnRoute() {
  if (location.pathname.match(/\/contact\/\d{1,}/g)) {
    // show contact
    let id = location.pathname.split('/contact/')[1];
    let contactToShow = contacts.filter(x => x.id === id)[0];

    //console.log(contact);
    //how to put this on screen??
    //modal change id on it

    //displayContactHistory()
    console.log('Now show the contact', contactToShow);
  }
  else {
    // not a contact detail so restore normal list view

    console.log('Restore list view');
  }

}

// listen on forward/back
window.addEventListener('popstate', reactOnRoute());

// run on initial hard page load
reactOnRoute();




  // function showOneContact() {
  //   document.querySelector('body')
  //   let contact = JSON.parse(localStorage.getItem('contact.id'));

  //   let oneContact = document.createElement('div');
  //   contact.innerHTML = JSON.parse(localStorage.getItem(contacts));
  //   oneContact.innerHTML = 'hej';
  //   oneContact.setAttribute('class', 'show-contact');
  //   body.append(oneContact);
  //   console.log('contact.id', name);

  //   let returnBtn = document.createElement('button');
  //   returnBtn.innerHTML = "tillbaka";
  //   body.append(returnBtn);
  //   returnBtn.setAttribute('id', 'returnBtn');
//}