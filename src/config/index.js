var ENV = process.env.NODE_ENV || 'development';

function selectByEnv(map){
  return map[ENV];
}

module.exports = {
  NAME: 'kustomer-banking-services-' + ENV,

  PORT: selectByEnv({
    development: 8080
  })
};
