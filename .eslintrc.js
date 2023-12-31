module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,        
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import', 
    ],
    rules: {
        semi: ['error', 'always'],
        'no-extra-semi': 'error',
        indent: ['error', 4, {SwitchCase: 1}],
        'space-before-function-paren': [
            'error',
            {anonymous: 'always', named: 'never'},
        ],
        'arrow-parens': ['warn', 'as-needed'],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'no-trailing-spaces': 0,
        curly: ['error', 'all'],
        'brace-style': ['error', '1tbs'],
        eqeqeq: 2,
        'comma-dangle': ['error', 'always-multiline'],
        quotes: ['warn', 'single'],
        'no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'no-used-vars': 0,
        'no-useless-escape': 1,
        'no-unused-expressions': 'off',
        'no-extra-boolean-cast': 'off',
        strict: 0,
        'no-alert': 0,
        'no-empty': 0,
        'consistent-return': 0,
        camelcase: 0,
        'max-len': ['warn', 200, 4],
        'spaced-comment': 1,
        'newline-after-var': ['error', 'always'],
        'no-console': ['error', {allow: ['warn', 'error', 'info']}],
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    'parent',
                    ['sibling', 'index'],
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/display-name': 0,
        'react/no-unused-prop-types': 0,
        'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'never'}],
        'react/jsx-no-bind': 0,
        'react/jsx-no-undef': 1,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/no-did-mount-set-state': 0,
        'react/no-did-update-set-state': 1,
        'react/no-multi-comp': 0,
        'react/no-unknown-property': 1,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 1,
        'react/self-closing-comp': 1,
        'react/wrap-multilines': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-wrap-multilines': [
            'warn',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resovler': {
            node: {
                paths: 'src',
            },
        },
        'react': {
            'version': 'detect',
        },
    },
};
