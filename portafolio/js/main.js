$(document).on("ready",iniciar);
function inicio()
{
	iniciar();
	$("#ver_cv").on("click",movida);	
}
function iniciar(){			
		var cs={
			color:"blue"
		};		
		$("#menu ul").append('<li><a href=# id=datos_p>Datos Personales</a></li>');
		$("#ver_cv").css(cs);		
}
function movida()
{
	alert("presionado");
}
