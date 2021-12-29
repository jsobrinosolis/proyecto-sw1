$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        },
        message: "",
        fields: {
            nombre: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su nombre'
                    },
                    regexp: {
                        regexp: '^[A-Za-záéíóúáéíóúÁÉÍÓÚñÑàèìòùÀÈÌÒÙ -]+$',
                        message: 'Por favor introduzca correctamente su nombre'
                    }
                }
            },
            apellido: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su apellido'
                    },
                    regexp: {
                        regexp: '^[A-Za-záéíóúáéíóúÁÉÍÓÚñÑàèìòùÀÈÌÒÙ -]+$',
                        message: 'Por favor introduzca correctamente su apellido'
                    }
                }
            },
            usuario: {
                validators: {
                    stringLength: {
                        min: 5,
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su nombre de usuario'
                    },
                    regexp: {
                        regexp: '^[a-zA-Z\\d]+$',
                        message: 'Por favor introduzca correctamente su nombre usuario'
                    }
                }
            },
            psw: {
                validators: {
                    stringLength: {
                        min: 8,

                    },
                    notEmpty: {
                        message: 'Por favor introduzca su contraseña'
                    },
                    identical: {
                        field: 'psw1',
                        message: 'Las contraseñas no coinciden'
                    },
                    regexp: {
                        regexp: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                        message: 'Por favor introduzca correctamente la contraseña'
                    }
                },
            },
            psw1: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor confirma la contraseña'
                    },
                    identical: {
                        field: 'psw',
                        message: 'Las contraseñas no coinciden'
                    },
                    regexp: {
                        regexp: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                        message: 'Por favor introduzca correctamente la contraseña'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor introduzca su correo electrónico'
                    },
                    email: {
                        message: 'Por favor introduzca un correo electrónico valido'
                    },
                    regexp: {
                        regexp: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$',
                        message: 'Por favor introduzca correctamente el email'
                    }
                }
            },
            telefono: {
                validators: {
                    stringLength: {
                        min: 9,
                        max: 9,
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su número de teléfono'
                    },
                    regexp: {
                        regexp: '[6-7]{1}[0-9]{8}',
                        message: 'Por favor introduzca correctamente el número de telefono'
                    }
                }
            },
            tipo_cuenta: {
                validators: {
                    notEmpty: {
                        message: 'Por favor introduzca su tipo de cuenta'
                    }
                }
            },
            edad: {
                validators: {
                    greaterThan: {
                        value: 18,
                        message: 'Debe ser mayor de edad'
                    },
                    lessThan: {
                        value: 100,
                        message: 'Debe ser menor de 100 años'
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su edad'
                    }
                }
            },
            DNI: {
                validators: {
                    stringLength: {
                        min: 9,
                        max: 9,
                    },
                    notEmpty: {
                        message: 'Por favor introduzca su DNI'
                    },
                    callback: {
                        message: 'Por favor introduzca un DNI valido',
                        callback: function(value, element) {
                            return validar_dni(value);
                        }
                    }
                }
            },
            ubica: {
                validators: {
                    notEmpty: {
                        message: 'Por favor seleccione su ubicación'
                    }
                }
            },
            terminos: {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: 'Necesitas aceptar antes de continuar.'
                    },
                }
            },
        }
    })

        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow")
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

function validar_dni(value){

    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = value.toString().toUpperCase();

    if (!nifRexp.test(str)) return false;

    var letter = str.substr(-1);
    var charIndex = parseInt(str.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return true;

    return false;
}
