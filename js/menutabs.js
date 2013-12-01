/*
	To Andre:
	
	This jQuery code is based off of a Youtube tutorial by PhpAcademy entitled "Build a Simple jQuery Tabbing System" and uploaded on Nov 29, 2013
	-- url: http://www.youtube.com/watch?v=8C3dNZs5FQg&list=PLfdtiltiRHWEepS-Zk82wZ_Qwb9_doRvs&index=1	

	I (Bronek) have also taken the time to make sure how it works before using it here.	
*/

$('#main > #menutitles li a').on('click', function(){
	var that = $(this),
		main = that.parent().parent().parent().parent(),
		target = $.trim(that.attr('href').substring(1)),
		items = main.find('#menutitles li');
		
	items.removeClass('selected').find('a[href="#' + target + '"]').parent().parent().addClass('selected');
	
	main.find('.menucat').show();
	main.find('.menucat:not(".' + target + '")').hide();
});