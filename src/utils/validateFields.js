import Joi from "joi";

export const validatePost = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
    });

    return schema.validate(data);
};