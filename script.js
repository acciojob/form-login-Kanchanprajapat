function getFormvalue() {
    //Write your code here
	 // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the form element
  const form = document.getElementById('form1');

  // Get the values of first name and last name from the form
  const firstName = form.elements['firstName'].value;
  const lastName = form.elements['lastName'].value;

  // Display the first and last name using alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Event listener to call getFormvalue() when the form is submitted
document.getElementById('form1').addEventListener('submit', getFormvalue);

}
