import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
    username: Yup.string().required('O seu nome ou de sua empresa é obrigatório.'),
    email: Yup.string().email('Deve ser um email válido.').required('O email é obrigatório.'),
    message: Yup.string().min(15, 'A mensagem deve ter no mínimo 15 caracteres').required('A mensagem é obrigatória.')
})