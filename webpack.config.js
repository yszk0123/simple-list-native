const config = require('@expo/webpack-config');

const pathsToInclude = ['native-base', 'react-native'];

module.exports = function(env, ...args) {
  const envProxy = new Proxy(env, {
    set(obj, prop, value) {
      if (prop === 'babelConfig') {
        const originalInclude = value.include;
        const extendedInclude = path =>
          pathsToInclude.some(p => path.includes(p)) || originalInclude(path);
        obj[prop] = { ...value, include: extendedInclude };
      } else {
        obj[prop] = value;
      }
      return true;
    },
  });
  return config(envProxy, ...args);
};
