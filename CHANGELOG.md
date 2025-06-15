# 📦 Changelog

## [v0.1.1-docs] - 2025-06-15

### ✨ Adicionado
- Documentação técnica `lint-config-documentacao.md` descrevendo todas as decisões de lint, prettier e estrutura profissional
- Link da documentação incluído em `project-overview.md`
- Scripts `lint` e `format` adicionados ao `package.json`
- `.vscode/settings.json` com suporte a ESLint + Prettier

### 🔧 Alterado
- Adotado ESLint com `eslint.config.mjs` (FlatConfig)
- Removido `eslint-plugin-tailwindcss` por incompatibilidade com Tailwind CSS v4
- Atualizado `lint-staged` para usar `--config=eslint.config.mjs`

---
