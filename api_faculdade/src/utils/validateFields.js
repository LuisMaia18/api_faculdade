import Joi from "joi";

export const validateCar = (data) => {
    const schema = Joi.object({
        make: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().integer().min(1886).max(new Date().getFullYear()).required(),
        color: Joi.string().required(),
        price: Joi.number().positive().required(),
    });

    return schema.validate(data);
};