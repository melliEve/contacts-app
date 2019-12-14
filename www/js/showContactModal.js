let showContactHistoryModal = (option) => {
//   let personNameHistory = document.querySelector('#personNameHistory');
//   let personPhoneHistory = document.querySelector('#personPhoneHistory');
//   let personEmailHistory = document.querySelector('#personEmailHistory');
//   personNameHistory;
//   personPhoneHistory;
//   personEmailHistory;

  let personHistoryModal = document.querySelector('#showHistoryModal');
   personHistoryModal.setAttribute('class', `${option}-modal`);

   let backdrop1 = document.querySelector('#showHistoryModalbackdrop');
   backdrop1.setAttribute('class', `${option}-modal`);
}