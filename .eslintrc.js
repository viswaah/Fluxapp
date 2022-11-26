module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        '@react-native-community',
        'plugin:react/recommended',
        'airbnb-typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['tsconfig.json']
    },
    plugins: [
        'react',
        'react-native',
        '@typescript-eslint',
        'simple-import-sort',
        'import'
    ],
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        "no-console": "off",
        'prettier/prettier': ['error', {}, {usePrettierrc: true}],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-single-element-style-arrays': 2,
        'react-native/sort-styles': [
            'error',
            'asc',
            {
                ignoreClassNames: false,
                ignoreStyleProperties: false
            }
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {extensions: ['.js', '.jsx', '.ts', '.tsx']}
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'no-loop-func': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-loop-func': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'max-len': ['warn', {code: 100}],
        "react/jsx-props-no-spreading": "off",
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'warn',
    }
};