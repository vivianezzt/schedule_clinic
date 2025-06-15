import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierPlugin from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
      tailwindcss: tailwindcss,
    },
    rules: {
      // Ordenação de imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Prettier
      "prettier/prettier": "error",

      // Tailwind (opcional — pode comentar se der conflito com v4)
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off"
    }
  }
];

export default eslintConfig;
