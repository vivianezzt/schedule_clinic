## 📄 Documentação: Configuração Profissional de Lint, Prettier e Padronização de Código

> Este documento descreve todas as correções, ajustes e melhorias realizadas para padronizar o estilo de código e configurar um ambiente profissional no projeto `clinical-schedule`. As tarefas aqui documentadas foram executadas de forma planejada e estruturada, mesmo não fazendo parte do escopo do projeto educacional original. O objetivo é manter um histórico técnico e mostrar boas práticas a recrutadores.

---

## ✅ Contexto

Durante o desenvolvimento da branch `feat/authentication-page`, identificamos a necessidade de organizar a estrutura do projeto com ferramentas de linting e formatação de código para garantir consistência, legibilidade e qualidade técnica.

Foi criada a branch `chore/lint-flatconfig` exclusivamente para essas configurações, garantindo separação de responsabilidades e histórico limpo.

---

## ⚙️ Ferramentas e Configurações Aplicadas

### 1. ESLint com FlatConfig (`eslint.config.mjs`)

* Uso da API moderna do ESLint 9+ com `FlatCompat`
* Compatível com Next.js e TypeScript
* Plugins integrados:

  * `eslint-plugin-prettier`
  * `eslint-plugin-simple-import-sort`
* Remoção de `eslint-plugin-tailwindcss` (incompatível com Tailwind v4)

### 2. Prettier com Tailwind CSS

* Plugin: `prettier-plugin-tailwindcss`
* Ordenação automática de classes utilitárias
* Configuração personalizada no `.prettierrc`

### 3. lint-staged + Husky

* Correções automáticas antes do commit
* Configurado para funcionar com FlatConfig explicitamente:

  ```json
  {
    "*.ts?(x)": [
      "eslint --fix --config=eslint.config.mjs",
      "prettier --write"
    ]
  }
  ```

### 4. VS Code `.vscode/settings.json`

* Ativa formatação ao salvar (`formatOnSave`)
* Integra ESLint e Prettier diretamente no editor

### 5. Scripts no `package.json`

```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx --config=eslint.config.mjs",
  "format": "prettier --write ."
}
```

---

## 🧾 Commit

```bash
chore(lint): configura eslint com flat config, prettier e ordenação de imports
```

---

## 🔀 Pull Request

**Branch:** `chore/lint-flatconfig`

**Título:** `chore(lint): configura eslint com flat config, prettier e ordenação de imports`

**Descrição:**

> Este PR aplica a configuração moderna de lint e formatação do projeto utilizando:
>
> * ESLint com `eslint.config.mjs` (FlatConfig)
> * Integração com Prettier (`eslint-plugin-prettier`)
> * Ordenação automática de imports com `eslint-plugin-simple-import-sort`
> * Plugin Prettier para ordenação de classes Tailwind (`prettier-plugin-tailwindcss`)
>
> ❌ `eslint-plugin-tailwindcss` foi removido por incompatibilidade com Tailwind v4.
>
> 🔧 VS Code configurado para aplicar formatação ao salvar.

---

## 🏁 Milestone (opcional)

**Nome:** `infraestrutura base do projeto`

**Objetivo:** Reunir tarefas essenciais de configuração do projeto (lint, prettier, CI/CD, testes base).

---

## ✅ Resultado Final

* Código limpo, padronizado e validado automaticamente
* Ambiente de desenvolvimento pronto para escala com equipe
* Configuração replicável em outros projetos profissionais

---

> Documento gerado a partir da interação no chat com objetivo de registrar histórico técnico e mostrar boas práticas de projeto profissional.
