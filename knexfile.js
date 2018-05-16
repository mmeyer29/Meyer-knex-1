
module.exports = {

  development: {
    client: 'pg',
    connection: "postgres:///nyresolutions"},

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
