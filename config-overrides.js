// config-overrides.js
module.exports = function override(config, env) {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });
    return config;
  };
  