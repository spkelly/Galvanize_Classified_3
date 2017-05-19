// Update with your config settings.

module.exports = {

  development: {
    'client': 'pg',
    'connection': {
      'database': 'classifieds_dev'
    }
  },
  test: {
    'client': 'pg',
    'connection': {
      'database': 'classifieds_test'
    }
   },
  production: {
    "client":"pg",
    "connection": process.env.DATABASE_URL
  },

};
