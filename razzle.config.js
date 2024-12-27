/* global module */

module.exports = {
  plugins: ['scss', 'svg-react-component', 'flow'],
  modify: (config, { target }) => {
    if (target === 'node') {
      // eslint-disable-next-line no-param-reassign
      config.output.publicPath = '/public';
    }

    return config;
  },
  modifyWebpackConfig(opts) {
    const { webpackConfig: config } = opts;
    const { module } = config;
    const { rules } = module;

    config.optimization.minimizer = config.optimization.minimizer.filter(
      item => {
        const {
          options: { terserOptions }
        } = item;
        // console.log(item);
        // console.log(terserOptions);
        return !terserOptions;
      }
    );

    const newRules = rules.map(rule => {
      const { use } = rule;
      const newUse = use.map(oneUse => {
        if (
          oneUse?.options?.modules?.localIdentName ===
          '[name]__[local]___[hash:base64:5]'
        ) {
          // eslint-disable-next-line no-param-reassign
          oneUse.options.modules.localIdentName = '[name]__[local]';
        }

        return oneUse;
      });

      return {
        ...rule,
        use: newUse
      };
    });

    // Change the name of the server output file in production
    if (opts.env.target === 'node' && !opts.env.dev) {
      // config.output.filename = 'custom.js';
    }

    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    };

    return {
      ...config,
      module: {
        ...module,
        rules: newRules
      }
    };
  }
};
