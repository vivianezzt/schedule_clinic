
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin
    },
    rules: {
      // Ordenação de imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Prettier como fonte de verdade de estilo
      'prettier/prettier': 'error'
    }
  }
];

export default eslintConfig;
