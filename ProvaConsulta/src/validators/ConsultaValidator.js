const yup = require('yup');

const consultaSchema = yup.object().shape({
    data: yup
        .date('Data precisa ser uma data válida')
        .required('Data é obrigatória'),
    paciente: yup
        .string('Paciente precisa ser um texto')
        .required('Paciente é obrigatório'),
    medico: yup
        .string('Médico precisa ser um texto')
        .required('Médico é obrigatório'),
    descricao: yup
        .string('Descrição precisa ser um texto')
        .required('Descrição é obrigatória'),
    status: yup
        .string('Status precisa ser um texto')
        .oneOf(['Agendada', 'Realizada', 'Cancelada'], 'Status inválido')
        .required('Status é obrigatório')
});

function validarConsulta(req, res, next) {
    consultaSchema
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
    validarConsulta
};
