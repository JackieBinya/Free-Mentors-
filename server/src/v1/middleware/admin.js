import bcrypt from 'bcryptjs';
import '../../../../env';
import User from '../models/User';

class Admin {
  static async createAdmin(req, res, next) {
    try {
      const rows = await User.findAdmin();
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt);
      if (!rows.length) {
        User.createAdmin({
          firstName: 'admin',
          lastName: 'admin',
          email: process.env.ADMIN_EMAIL,
          password: hash,
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    }
    next();
  }
}

export default Admin;
