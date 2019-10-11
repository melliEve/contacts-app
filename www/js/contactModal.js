let enableDisableNewUserModal = (option) => {
  let newPersonName = document.querySelector('#newPersonName');
  let newPersonPhone = document.querySelector('#newPersonPhone');
  let newPersonEmail = document.querySelector('#newPersonEmail');
  newPersonName.value = '';
  newPersonPhone.value = '';
  newPersonEmail.value = '';

  let newPersonModal = document.querySelector('#newPersonModal');
  newPersonModal.setAttribute('class', `${option}-modal`);

  let backdrop = document.querySelector('#backdrop');
  backdrop.setAttribute('class', `${option}-modal`);
}
