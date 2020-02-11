(function() {
  /** @type {HTMLInputElement} */
  const txtWeddingDate = document.querySelector('input[name="wedding[date]"]')

  if(!txtWeddingDate) return;

  /** @type {Date} */
  minDate = new Date();
  
  /** @type {Number} */
  oneYear = 365
  
  /** @type {Date} */
  maxDate = new Date(new Date().setDate(minDate.getDate()+oneYear+1));

  strMinDate = `${minDate.getFullYear()}-${("0" + minDate.getMonth()).slice(-2)}-${("0" + minDate.getDate()).slice(-2)}`
  strMaxDate = `${maxDate.getFullYear()}-${("0" + maxDate.getMonth()).slice(-2)}-${("0" + maxDate.getDate()).slice(-2)}`

  txtWeddingDate.setAttribute('min', strMinDate);
  txtWeddingDate.setAttribute('max', strMaxDate);

  console.log(txtWeddingDate);
})();