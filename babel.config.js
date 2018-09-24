module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];

  const plugins = [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-computed-properties",
    "@babel/plugin-transform-spread",
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-transform-for-of"
  ];

  return {
    presets,
    plugins
  };
}