function phonenumber(inputtxt) {
  var phonenum = /^\d{10}$/;
  if (inputtxt.match(phonenum)) {
    return true;
  } else {
    alert("Please enter a valid Phone Number!");
    return false;
  }
}
