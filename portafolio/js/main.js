$(document).on("ready",iniciar);
function inicio()
{
	iniciar();
	$("#ver_cv").on("click",iniciar);	
}
function iniciar(){						
		var cs={
			opacity:1,
			left:5
		};				
		$("#lista_portafolio li").css(cs);		
}
function movida()
{
	alert("presionado");
}
