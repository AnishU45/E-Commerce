function valid() {
  var uname = /^[A-Za-z]+(\s)+[A-za-z]+$/;
  var uemail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
  var umessage= /^(\w)+$/

  var nm = document.getElementById("name").value;
  if(nm=="")
  {
    alert("Name is Blank");
    return false;
  }
  if(!uname.test(nm)){
    alert("Name is not valid!");
    return false;
  }

  var em = document.getElementById("email").value;
  if(em==""){
    alert("Email is Blank");
    return false;
  }
  if(!uemail.test(em)){
    alert("Email is not valid!");
    return false;
  }

  var mg = document.getElementById("msg").value;
  if(mg==""){
    alert("Message area is Blank!!");
    return false;
  }
  if(!umessage.test(mg)){
    alert("Message must be alphanumeric");
    return false;
  }
}