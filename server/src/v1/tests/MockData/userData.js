import '../../../../../env';

const User = {
  user00: {
    firstName: 'Cindy',
    lastName: 'Bar',
    email: 'cindy@bar.com',
    password: '123456a',
  },

  user01: {
    firstName: '',
    lastName: 'Bar',
    email: 'cindy@bar.com',
    password: '123456a',
  },

  user02: {
    firstName: 'Cindy',
    lastName: '',
    email: 'cindy@bar.com',
    password: '123456a',
  },

  user03: {
    firstName: 'Cindy',
    lastName: 'Bar',
    email: 'cindybarcom',
    password: '123456a',
  },

  user04: {
    firstName: 'Cindy',
    lastName: 'Bar',
    email: 'cindy@bar.com',
    password: '2005',
  },

  admin: {
    firstName: 'admin',
    lastName: 'admin',
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },

  session00: {
    mentorId: 70000,
    questions: `Is the earth flat?
    How many times in a yea do we have solar ecclipse`,
  },

  user18: {
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foo@bar.com',
    password: '123456a',
  },
};

export default User;
