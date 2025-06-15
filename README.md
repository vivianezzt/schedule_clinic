
# 🏥 Clinic Schedule

Sistema de agendamento clínico com gerenciamento de usuários, médicos, pacientes e clínicas — desenvolvido com foco em arquitetura profissional, uso de Git avançado, e banco de dados relacional com Drizzle ORM.

---

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Neon Database](https://neon.tech/)
- [Husky + lint-staged](https://typicode.github.io/husky)
- [ESLint + Prettier + Tailwind plugin](https://prettier.io/)
- [Drizzle Studio](https://orm.drizzle.team/studio)

---

## 🛠️ Funcionalidades em desenvolvimento

- [x] Setup do projeto com Next.js e TypeScript
- [x] Configuração de Prettier, ESLint, Tailwind e Husky
- [x] Estrutura do banco de dados com Drizzle ORM
- [x] Deploy do schema no banco (NeonDB)
- [x] Validação no Drizzle Studio
- [x] Geração do diagrama ERD
- [x] Implementação da tela de login e cadastro [`docs/authentication-page.md`](./docs/authentication-page.md)
- [ ] CRUD de pacientes, médicos e agendamentos
- [ ] Integração com calendário
- [ ] Autenticação e autorização (em breve)

---

## 🧩 Documentação de funcionalidades

- 🔐 [AuthenticationPage — tela de login e cadastro](./docs/authentication-page.md)

---

## 🎨 Figma do Projeto

<a href="https://www.figma.com/design/0G9SAhJsDPpb9mXORSxxY3/dr.agenda?node-id=55-2296&t=v6HLEDewtpbwiVb8-0">**Clinic scheduling**</a>

<img src="./public/Dashboard.png">

## 🧱 Estrutura do banco de dados

O banco de dados foi modelado com Drizzle ORM, utilizando PostgreSQL.

- Tabelas:
  - `users`
  - `clinics`
  - `doctors`
  - `patients`
  - `appointments`
  - `users_to_clinics`

### 🖼 Diagrama do banco:  
<img src="./public/clinic-shedule.png">

---

## ⚙️ Scripts disponíveis

```bash
npm run dev           # Inicia o servidor Next.js em modo dev
npm run lint          # Executa ESLint
npm run format        # Formata com Prettier
npm run db:push       # Aplica alterações do schema no banco via Drizzle
npm run db:studio     # Abre o Drizzle Studio localmente
```

---

## 🌐 Variáveis de ambiente

Crie um arquivo `.env` baseado em `.env.example`:

```
DATABASE_URL=postgres://user:password@host:port/db
```

---

## 📁 Estrutura de pastas

```bash
src/
  └── db/
      ├── index.ts          # conexão com o banco
      └── schema.ts         # modelagem relacional
  └── app/                  # páginas do Next.js
public/
  └── clinic-shedule.png    # diagrama ERD do banco
```

---

## ✅ Checklist de boas práticas aplicadas

- [x] Commits semânticos com mensagens claras
- [x] Branches organizadas por feature
- [x] Uso de Husky para validação automática
- [x] Arquivo `.gitignore` profissional
- [x] Projeto estruturado para escalabilidade

---

## 👩‍💻 Desenvolvido por

**Viviane Silva**  
🔗 [github.com/vivianezzt](https://github.com/vivianezzt)
