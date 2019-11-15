import schema from '../utils/schema';

class Validators {
  static signUp(req, res, next) {
    const { error } = schema.signUpValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details,
      });
    }
    next();
  }

  static login(req, res, next) {
    const { error } = schema.loginValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    next();
  }

  static session(req, res, next) {
    const { error } = schema.sessionValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    next();
  }

  static mentorJoiVal(req, res, next) {
    const { error } = schema.mentorIdValidator.validate(req.params);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    next();
  }

  static sessionJoiVal(req, res, next) {
    const { error } = schema.sessionIdValidator.validate(req.params);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    next();
  }

  static userJoiVal(req, res, next) {
    const { error } = schema.userIdValidator.validate(req.params);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }
    next();
  }
}

export default Validators;
