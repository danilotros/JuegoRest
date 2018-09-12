consultas =
    {
        envioPeticiones: function () {
            var nombre = $("#nombre").val();
            var puntaje = 1;

            var data={};
            data.nombre=nombre;
            data.puntaje=puntaje;
            $.ajax({
                type:'POST',
                url: 'http://localhost:3000/jugador/login',
                dataType: 'json',
                data: JSON.stringify(data),
                contentType:'application/json',
                success: function (dataR) {
                    alert("exito");
                },
                error: function (e) {
                    alert("fracaso");
                }
            }); 

        }


    }