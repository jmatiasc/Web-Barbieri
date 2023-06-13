

    $(document).on('click',".btn-no-leido",function(e) {
        let id_consulta = $(this).attr('data-id');
        $.ajax({ 
              url: 'marcar-Consultas-leida/'+id_consulta, 
              type: "GET", 
              success: function (data) {
                  var x = JSON.stringify(data); 
                  document.getElementById('t_Consultas_'+id_consulta).setAttribute("style", "color:white;");
                  document.getElementById('asunto_'+id_consulta).setAttribute("style", "color:white;");
                  document.getElementById('btn-leido-'+id_consulta).innerHTML = "<i class='fas fa-envelope-open-text'></i>";
                  $("#btn-leido-"+id_consulta).removeClass('btn-no-leido');
                  $("#btn-leido-"+id_consulta).addClass('btn-leido');
              }, 
              error: function (error) {
                  console.log(`Error ${error}`);
              }
            });
             
    });

    $(document).on('click',".btn-no-leido-actual",function(e) {
        let id_consulta = $(this).attr('data-id');
        $.ajax({ 
              url: 'marcar-Consultas-leida/'+id_consulta, 
              type: "GET", 
              success: function (data) {
                  var x = JSON.stringify(data); 
                  document.getElementById('t_Consultas_'+id_consulta).setAttribute("style", "color:white;");
                  document.getElementById('asunto_'+id_consulta).setAttribute("style", "color:white;");
                  document.getElementById('btn-leido-'+id_consulta).innerHTML = "<i class='fas fa-envelope-open-text'></i>";
              }, 
              error: function (error) {
                  console.log(`Error ${error}`);
              }
            });
            
    });

    $(document).on('click',".btn-leido",function(e) {
        let id_consulta = $(this).attr('data-id');
        $.ajax({ 
              url: 'marcar-Consultas-no-leida/'+id_consulta, 
              type: "GET", 
              success: function (data) {
                  var x = JSON.stringify(data); 
                  document.getElementById('t_Consultas_'+id_consulta).setAttribute("style", "color:white;font-weight: bold;");
                  document.getElementById('asunto_'+id_consulta).setAttribute("style", "color:#7497f5");
                  document.getElementById('btn-leido-'+id_consulta).innerHTML = "<i class='fas fa-envelope'></i>";
                  $("#btn-leido-"+id_consulta).removeClass('btn-leido');
                  $("#btn-leido-"+id_consulta).addClass('btn-no-leido');
              }, 
              error: function (error) {
                  console.log(`Error ${error}`);
              }
            });
            
    });

    $(document).on('click',".btn-borrar",function(e) {
        Swal.fire({
            icon: 'warning',
            title: 'Está a punto de borrar una consulta!',
            text: '¿Desea continuar?',
            confirmButtonText: `Borrar`,            
            showCancelButton: true,
            confirmButtonColor: '#47bac1',
        }).then((result) => {
            if (result.isConfirmed) { 
            let id_consulta = $(this).attr('data-id');
            $.ajax({ 
                url: 'borrar-Consultas/'+id_consulta, 
                type: "GET", 
                success: function (data) { 
                    document.getElementById('t_Consultas_'+id_consulta).setAttribute("style", "display:none"); 
                }, 
                error: function (error) {
                    console.log(`Error ${error}`);
                }
                });
            }
        });
            
    }); 

    $(document).on('click',".btn-enviar",function(e) {
        Swal.fire({
            icon: 'warning',
            title: 'Está a punto de enviar un email!',
            text: '¿Desea enviarlo?',
            confirmButtonText: `Enviar`,            
            showCancelButton: true,
            confirmButtonColor: '#47bac1',
        }).then((result) => {
            if (result.isConfirmed) { 
            
            let id = $(this).attr('data-id');
            let email = $(this).attr('data-email');
            titulo = document.getElementById('titulo-'+id).value;
            texto = document.getElementById('email-personalizado-'+id).value; 
            $.ajax({ 
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {
                    titulo: titulo,
                    texto: texto,
                    email: email,
                },
                url: 'email_personalizado',
                type: "POST", 
                success: function (data) {
                }, 
                error: function (error) {
                    console.log(`Error ${error}`);
                }
                });
            }
        })
            
    });

    $(document).on('click',".btn-mail-personalizado",function(e) {
        let id = $(this).attr('data-id');
        document.getElementById('panel-mail-'+id).setAttribute("style", "");
        document.getElementById('panel-general-'+id).setAttribute("style", "display:none");  
    });

    $(document).on('click',".btn-volver",function(e) {
        let id = $(this).attr('data-id');
        document.getElementById('panel-mail-'+id).setAttribute("style", "display:none");
        document.getElementById('panel-general-'+id).setAttribute("style", "");  
    });