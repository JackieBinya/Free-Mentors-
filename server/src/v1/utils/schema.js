import Joi from '@hapi/joi';

const schema = {
  signUpValidator: Joi.object({
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(30)
      .regex(/[a-zA-Z]/)
      .required()
      .messages({
        'string.empty': 'Please provide your first name',
        'string.min': 'The first name provided must be no less that {#limit} characters long.',
        'string.max': 'Your first name must be no less than {#limit} characters long.',
        'string.regex': 'Your first name should consists of letters only.',
        'any.required': 'The first name field is required.',
      }),
    lastName: Joi.string()
      .trim()
      .min(3)
      .max(30)
      .regex(/[a-zA-Z]/)
      .required()
      .messages({
        'string.empty': 'Please provide your last name.',
        'string.min': 'The last name provided must be no less that {#limit} characters long.',
        'string.max': 'Your last name must be no less than {#limit} characters long.',
        'string.regex': 'Your last name should consists of letters only.',
        'any.required': 'The last name field is required.',
      }),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .messages({
        'string.email': 'Email is invalid.',
      }),
    password: Joi.string()
      .min(6)
      .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
      .required()
      .messages({
        'string.empty': 'Please provide your password.',
        'string.min': 'The password must have no less than six characters.',
        'string.pattern.base': 'The password must consists of letters and numbers.',
      }),
  }),

  loginValidator: Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .messages({
        'string.email': 'Email is invalid.',
      }),
    password: Joi.string()
      .min(6)
      .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
      .required()
      .messages({
        'string.min': 'The password must have no less than six characters.',
        'string.pattern.base': 'The password must consists of letters and numbers.',
      }),
  }),

  sessionValidator: Joi.object({
    mentorId: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        'number.base': 'Invalid mentor id.',
        'number.posetive': 'Invalid mentor id',
        'number.integer': 'Mentor id must be a posetive integer.',
      }),
    questions: Joi.string().trim().max(800)
      .required()
      .messages({
        'string.max': 'Question must not exceed 200 characters',
      }),
  }),

  mentorIdValidator: Joi.object({
    mentorId: Joi.number().integer().positive()
      .required()
      .messages({ 'number.base': 'Invalid mentor id.' }),
  }),

  sessionIdValidator: Joi.object({
    sessionId: Joi.number().integer().positive()
      .required()
      .messages({ 'number.base': 'Invalid session id.' }),
  }),

  userIdValidator: Joi.object({
    userId: Joi.number().integer().positive()
      .required()
      .messages({ 'number.base': 'Invalid user id.' }),
  }),
};

export default schema;
