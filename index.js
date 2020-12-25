// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function validateForm() {
  var x = document.forms["myForm"]["uname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}