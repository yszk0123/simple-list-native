module.exports = function(api) {
  api.cache(true);

  const orig = api.caller;
  api.caller = () => true;
  const expo = require('babel-preset-expo')(api);
  api.caller = orig;

  expo.overrides[0].plugins
    .find(p => p[0] === 'babel-plugin-react-native-web')
    .push({ commonjs: true });
  expo.presets.find(p => p[0] === '@babel/preset-env')[1] = {
    modules: false,
    targets: {
      node: 'current',
    },
  };

  return {
    presets: [expo],
  };
};
