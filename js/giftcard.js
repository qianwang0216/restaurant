// js //
function changeCard(card) 
{
	switch(card.id)
	{
		case 'gcyellow':
			document.getElementById('gcpreview').style.backgroundColor = 'yellow';

			break;
		case 'gcred':
			document.getElementById('gcpreview').style.backgroundColor = 'red';
			break;
		case 'gcbw':
			document.getElementById('gcpreview').style.backgroundColor = 'black';
			break;
	}
}

function cardInfo()
{
	document.getElementById('prefname').innerHTML = document.getElementById("rfname").value
	document.getElementById('prelname').innerHTML = document.getElementById("rlname").value
	document.getElementById('preprice').innerHTML = document.getElementById("card-amt").value
}	

