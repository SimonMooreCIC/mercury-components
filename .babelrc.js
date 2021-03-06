const esModules = process.env['BABEL_ENV'] === 'es';

const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
];

const plugins = [
  ['transform-react-remove-prop-types'],
  ['@babel/plugin-proposal-object-rest-spread'],
];

const ignore = ['.spec.js', '.test.js', '-test.js', '/__tests__/'];

if (!esModules) {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: 'commonjs',
    },
  ];
  plugins.push('add-module-exports');
} else {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: false,
    },
  ];
}

module.exports = {
  presets,
  plugins,
  ignore,
};
