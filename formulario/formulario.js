(function(){
  var formulario=document.getElementById('formulario'),
      nombre=formulario.nombre,
      correo=formulario.correo,
      sexo=formulario.sexo,
      terminos=formulario.terminos,
      error=document.getElementById('error');
      function validarnombre(e){
        if(nombre.value=='' || nombre.value==null){
          console.log("por favor completa el nombre");
          error.style.display='block';
          error.innerHTML+= '<li>Por favor completa el nombre</li>';
          e.preventDefault();
        }else{
          error.style.display='none';
        }
      }
      function validarcorreo(e){
        if(correo.value=='' || correo.value==null){
          console.log("por favor completa el correo");
          error.style.display='block';
          error.innerHTML+= '<li>Por favor completa el correo</li>';
          e.preventDefault();
        }else {
          error.style.display='none';
        }

      }
      function validarsexo(e){
        if(sexo.value==''||sexo.value==null){
          console.log("por favor completa el sexo");
          error.style.display='block';
          error.innerHTML+= '<li>Por favor completa el sexo</li>';
          e.preventDefault();
        }else {
          error.style.display='none';
        }

      }
      function validarterminos(e){
          if(terminos.checked==false){
            console.log("por favor completa acepta los terminos");
            error.style.display='block';
            error.innerHTML+= '<li>Por favor acepta los terminos</li>';
            e.preventDefault();
          }else {
            error.style.display='none';
          }

      }
      function validarformulario(e){
        error.innerHTML='';
        validarnombre(e);
        validarcorreo(e);
        validarsexo(e);
        validarterminos(e);
      }
      formulario.addEventListener('submit',validarformulario);
}())
