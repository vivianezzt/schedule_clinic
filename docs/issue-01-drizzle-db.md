# 📌 Issue 01 – Configurar conexão com banco de dados (Drizzle + PostgreSQL)

## 🎯 Objetivo

Implementar a camada de **persistência** da aplicação utilizando o **Drizzle ORM** com **PostgreSQL**, modelando as entidades principais do domínio da clínica para viabilizar funcionalidades como cadastro de médicos, pacientes, agendamentos e multi-clínicas por usuário.

---

## 📚 Tarefas

### 🔧 Setup
- [x] 📦 Instalar dependências: `drizzle-orm`, `pg`, `drizzle-kit`
- [x] 🛠 Criar arquivo `drizzle.config.ts` com schema, out e driver PostgreSQL
- [x] 🧪 Criar `.env.example` com `DATABASE_URL`

### 🗃️ Modelagem
- [x] 🏥 Criar `clinics` com timestamps e campos básicos
- [x] 👤 Criar `users` com chave UUID
- [x] 🔗 Criar `users_to_clinics` (N:N entre users e clinics)
- [x] 🩺 Criar `doctors` com disponibilidade e preço
- [x] 🧍 Criar `patients` com sexo, email e telefone
- [x] 📅 Criar `appointments` com ligação a doctor, patient e clinic
- [x] 🧭 Definir enum `patient_sex` (`male`, `female`)
- [x] 🔄 Definir relações entre tabelas com `relations()`

### 🚀 Execução
- [x] 🧬 Criar `src/db/index.ts` com client PostgreSQL
- [x] ⬆️ Executar `drizzle-kit push` para aplicar as tabelas no banco (Neon)
- [ ] 🧪 Validar estrutura no Drizzle Studio (visualização do schema)

---

🧩 **Referência interna:** `#1`  
📂 **Branch:** `feat/database-setup`  
📝 **Responsável:** @vivianezzt