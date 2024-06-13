const yup = require('yup');

const enfermeiroSchema = yup.object().shape({
    nome: yup
        .string('Nome precisa ser um texto')
        .required('Nome é obrigatório'),
    
    idade: yup
        .string('idade precisa ser um numero')
        .required('idade obrigatório'),
    cargo: yup
        .string('Cargo precisa ser um texto')
        .required('Cargo é obrigatório')
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
