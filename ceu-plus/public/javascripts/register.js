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
                        min: 2
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
                        min: 2
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
            psw: {
                validators: {
                    stringLength: {
                        min: 8

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
                }
            },
            psw1: {
                validators: {
                    stringLength: {
                        min: 8
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
            tipo_cuenta: {
                validators: {
                    notEmpty: {
                        message: 'Por favor introduzca su tipo de cuenta'
                    }
                }
            }
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
