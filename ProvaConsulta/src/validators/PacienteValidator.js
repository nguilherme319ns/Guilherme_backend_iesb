const yup = require('yup');

const pacienteSchema = yup.object().shape({
    nome: yup
        .string('Nome precisa ser um texto')
        .required('Nome é obrigatório'),
    idade: yup
        .number('Idade precisa ser um número')
        .required('Idade é obrigatória'),
    genero: yup
        .string('Gênero precisa ser um texto')
        .oneOf(['Masculino', 'Feminino', 'Outro'], 'Gênero inválido')
        .required('Gênero é obrigatório'),
    telefone: yup
        .string('Telefone precisa ser um texto')
        .required('Telefone é obrigatório'),
    endereco: yup
        .string('Endereço precisa ser um texto')
        .required('Endereço é obrigatório'),
    historicoMedico: yup
        .string('Histórico médico precisa ser um texto')
});

function validarPaciente(req, res, next) {
    pacienteSchema
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
    validarPaciente
};
