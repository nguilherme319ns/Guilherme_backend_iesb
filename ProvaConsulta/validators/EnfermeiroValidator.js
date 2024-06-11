const yup = require('yup');

const enfermeiroSchema = yup.object().shape({
    nome: yup
        .string('Nome precisa ser um texto')
        .required('Nome é obrigatório'),
    coren: yup
        .string('COREN precisa ser um texto')
        .required('COREN é obrigatório'),
    telefone: yup
        .string('Telefone precisa ser um texto')
        .required('Telefone é obrigatório')
});

function validarEnfermeiro(req, res, next) {
    enfermeiroSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const erros = err.inner.map(e => ({
                campo: e.path,
                erro: e.errors[0]
            }));

            res.status(400).json({
                mensagem: 'Erro na validação dos campos',
                erros
            });
        });
}

module.exports = {
    validarEnfermeiro
};
