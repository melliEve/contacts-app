class Store extends AllContacts {
  constructor() {
      super();
      this.contacts = contacts;
      this.init = () => {
          if (localStorage.getItem("contacts")) {
              contacts = JSON.parse(localStorage.getItem("contacts"));
          };
          this.refreshDOMTable(contacts);

      };
      this.init()
  }
}

new Store();