const Joi = require("Joi")

const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        company: Joi.string().required(),
        phone: Joi.Number().require()
    }),
};

const getUsers = {
    query: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        company: Joi.string().required(),
        phone: Joi.Number().require()
    }),
};

const updateUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        company: Joi.string().required(),
        phone: Joi.Number().require()
    }),
};





export { createUser, getUsers, updateUser };
