/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const root = path.resolve(__dirname, '..');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [root],
  resolver: {
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      react: path.resolve(__dirname, 'node_modules/react'),
    },
    blacklistRE: blacklist([
      new RegExp(`${root}/node_modules/react-native/.*`),
      new RegExp(`${root}/node_modules/react/.*`),
    ]),
  },
};
