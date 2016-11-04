var ENV = process.env.NODE_ENV || 'local';

module.exports = function selectByEnv(map) {
  return map[ENV];
};
