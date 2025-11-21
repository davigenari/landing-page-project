$(document).ready(function() {
    
    //Formulário "Seja um Parceiro"
    $("#form-parceiro").validate({
        rules: {
            telefone: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            estado: {
                required: true
            }
        },
        messages: {
            telefone: {
                required: "Por favor, informe seu telefone.",
                minlength: "O telefone deve ter no mínimo 10 dígitos."
            },
            email: {
                required: "É necessário informar um e-mail.",
                email: "Por favor, informe um e-mail válido."
            },
            estado: "Selecione um estado."
        }
    });

    //Formulário Apoio ao GrinGo
    $("#form-apoio-gringo").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            email: "Por favor, digite seu e-mail de contato.",
            mensagem: {
                required: "Descreva o problema.",
                minlength: "A mensagem deve ter pelo menos 10 caracteres."
            }
        }
    });

    //Formulário Apoio ao Parceiro
    $("#form-apoio-parceiro").validate({
        rules: {
            nome: "required",
            codigo: "required",
            email: {
                required: true,
                email: true
            },
            mensagem: "required"
        },
        messages: {
            nome: "Digite seu nome completo.",
            codigo: "Informe o código do contrato.",
            email: "Informe um e-mail válido.",
            mensagem: "Descreva o problema."
        }
    });

});