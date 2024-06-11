const yup = require('yup');

const medicoSchema = yup.object().shape({
    nome: yup
        .string('Nome precisa ser um texto')
        .required('Nome é obrigatório'),
    especialidade: yup
        .string('Especialidade precisa ser um texto')
        .required('Especialidade é obrigatória'),
    crm: yup
        .string('CRM precisa ser um texto')
        .required('CRM é obrigatório'),
    telefone: yup
        .string('Telefone precisa ser um texto')
        .required('Telefone é obrigatório')
});

function validarMedico(req, res, next) {
    medicoSchema
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
    validarMedico
};
