searchInput = document.querySelector('#searchContact');
  searchInput.addEventListener('click', (e) => {
    let value = e.target.value;
    console.log(value);
    
    function validateInput() {
      let x, text;
      x = document.querySelector('#searchContact').value;
      if (x !== '') {
        text = 'input not valid';
      }
      else {
        text = 'input ok';
      }
      document.querySelector('#searchContact').innerHTML = text;
    }
    validateInput(console.log('hohoho'));
  });

