const yup = require('yup');

const especialidadeSchema = yup.object().shape({
    nome: yup
        .string('Nome precisa ser um texto')
        .required('Nome é obrigatório'),
    descricao: yup
        .string('Descrição precisa ser um texto')
        .required('Descrição é obrigatória'),
    area: yup
        .string('Área precisa ser um texto')
        .required('Área é obrigatória')
});

function validarEspecialidade(req, res, next) {
    especialidadeSchema
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
    validarEspecialidade
};
