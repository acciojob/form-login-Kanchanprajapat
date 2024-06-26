function getFormvalue() {
    //Write your code here
	var form = document.getElementById('yourFormId');
	var firstName = form.elements['firstName'].value;
	var lastName = form.elements['lastName'].value;
	alert(firstName + " "+ lastName);

}
