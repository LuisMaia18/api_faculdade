// Importa a biblioteca Joi para validação de dados
import Joi from "joi";

// Função que valida os dados de um post
export const validatePost = (data) => {
    // Define o esquema de validação: todos os campos obrigatórios
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
    });

    // Valida os dados recebidos com base no esquema
    return schema.validate(data);
};
