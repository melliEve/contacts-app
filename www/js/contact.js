const contact = {
  name: '',
  phone: '',
  email: '',
  history: []
}

function Person(name, phone, email) {
  let newContact = {
    id: createId(),
    name,
    phone,
    email,
    history: []
  }; //Object.create(contact); 
  return newContact;
}

function createId() {
  return (Math.random() + '').split('.')[1];
}

function createHistoryContact(name, phone, email, id){
  let saveHistory = {
    name, 
    phone,
    email,
    id
  }
  return saveHistory;
}
