// JavaScript Document
function Submit(){
	var emailReg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var postcodeReg=/^\s*[a-ceghj-npr-tvxy]\d[a-z](\s)?\d[a-z]\d\s*$/i;
	var phoneReg="0123456789";
	var letters="abcdefghijklmnopqrstuvwxyz";
	//name
	var name=document.frm.name.value;
	if(name==""){
		alert("Please input your name");
		document.frm.name.focus();
		return false;
	}
	for(i=0;i<name.length;i++){
		if(letters.indexOf(name.charAt(i))==-1){
			alert("Please input valid name");
			return false;	
		}
	}
	//address
	var address=document.frm.address.value;
	if(address==""){
		alert("Please input your address");
		document.frm.address.focus();
		return false;
	}
	//post code
	var postCode=document.frm.postCode.value;
	if(postCode==""){
		alert("Please input your post code");
		document.frm.postCode.focus();
		return false;
	}
	if(!postcodeReg.test(postCode)){
		alert("Please input valid post code (e.g. 'm9v1n8')");
		return false;
	}
	//phone number
	var phone=document.frm.phone.value;
	if(phone==""){
		alert("Please input your phone number");
		document.frm.phone.focus();
		return false;
	}
	for(i=0;i<phone.length;i++){
		if(phoneReg.indexOf(phone.charAt(i))==-1){
			alert("Please input valid phone number");
			return false;
		}
	}
	//email
	var email=document.frm.email.value;
	if(email==""){
		alert("Please input your email");
		document.frm.email.focus();
		return false;
	}
	if(!emailReg.test(email)){
		alert("Please input valid email");
		return false;
	}
	//message
	var message=document.frm.message.value;
	if(message==""){
		alert("Please input message");
		document.frm.message.focus();
		return false;	
	}

	alert("Thank you for you contact, "+name+"! We recieved your message and we will reply in 24h!");
	
	frm.name.value="";
	frm.address.value="";
	frm.postCode.value="";
	frm.phone.value="";
	frm.email.value="";
	frm.message.value="";
	
}