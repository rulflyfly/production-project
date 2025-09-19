module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension':
            [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        semi: ['error', 'always'],
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies':
            ['error', { devDependencies: true }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string':
        ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'placeholder'] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'react/display-name': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',

    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],

};
