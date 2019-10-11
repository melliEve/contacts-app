// Initial read
let store;
try {
  store = JSON.parse(localStorage.store);
}
catch (e) {
  store = {};
}

store.save = function () {
  localStorage.store = JSON.stringify(this);
};

if (!store.saveContact) {

  // This should only run once
  // because on next page load there should
  // be a saved admin in the store

  //console.log('Creating admin');

  store.saveContact = { name: 'Tom', status: 'superadmin' };

  store.save();

}

console.log(store.saveContact)

