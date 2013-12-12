// JavaScript Document

function display(obj,id1,id2,id3) {
 txt = obj.options[obj.selectedIndex].value;
 document.getElementById(id1).style.display = 'none';
 document.getElementById(id2).style.display = 'none';
  document.getElementById(id3).style.display = 'none';
 if ( txt.match(id1) ) {
 document.getElementById(id1).style.display = 'block';
 }
 if ( txt.match(id2) ) {
 document.getElementById(id2).style.display = 'block';
 }
 if ( txt.match(id3) ) {
 document.getElementById(id3).style.display = 'block';
 }
 }
 
 //--------------------------------------
 
  function show() { 
        if(document.getElementById('detail').style.display=='none') { 
            document.getElementById('detail').style.display='block'; 
        } 
        return false;
    } 
    function hide() { 
        if(document.getElementById('detail').style.display=='block') { 
            document.getElementById('detail').style.display='none'; 
        } 
        return false;
    }   
	
	//----------------------------------------
	
	function leaveChange() {
    if (document.getElementById("Sel_Time").value != "six"){
        document.getElementById("message").innerHTML = "Table available for : "+p_size.value +" On "+pic_date.value;
		 document.getElementById('reserv').style.display='block';
		
    }     
    else{
        document.getElementById("message").innerHTML = "Sorry, all tables occupied";
		 document.getElementById('reserv').style.display='none';
		
    }        
}

//----------------------------------------------

function thankmsg() {
      document.getElementById("msg1").innerHTML = "Thank you for your reservation. Hope to see you soon!";
		
    }   
	
