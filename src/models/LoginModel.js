const Joi = require('joi');


const schema = Joi.object().keys({

    password: Joi.string()
    .required().messages({'any.required': `Password is required for login`}),

    username: Joi.string()
    .required().messages({'any.required': `Username is required for login`}),

});

module.exports = {
    schema
}
