module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "import/no-unresolved": "off",
    'import/extensions': 'off',
    "import/no-extraneous-dependencies": [
      "error",
      {"devDependencies": true}
    ]
  },
  settings: {
    "import/resolver": {
      node: {
            paths: ['./src'],
            extensions: ['.js']
          },
      vite: {
        configPath: './vite.config.js'
      }
    },
    // 'import/resolver': {
    //   alias: true,
    //   node: {
    //     paths: ['./src'],
    //     extensions: ['.js']
    //   },
    //   vite: {
    //
    //   }
    // }

  }
};
