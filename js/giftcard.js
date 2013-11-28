// js //
function changeCard(card) 
{
	switch(card.id)
	{
		case 'gcyellow':
			document.getElementById('gcpreview').style.backgroundColor = '#681207';
			document.getElementById('gcpreview').style.color = '#fff9e8';

			break;
		case 'gcred':
			document.getElementById('gcpreview').style.backgroundColor = '#fff9e8';
			document.getElementById('gcpreview').style.color = '#681207';
			break;
		case 'gcbw':
			document.getElementById('gcpreview').style.backgroundColor = '#d22a09';
			document.getElementById('gcpreview').style.color = '#fff9e8';
			break;
	}
}

function cardInfo()
{
	document.getElementById('prefname').innerHTML = document.getElementById("rfname").value
	document.getElementById('prelname').innerHTML = document.getElementById("rlname").value
	document.getElementById('preprice').innerHTML = "$"+document.getElementById("card-amt").value
}	

