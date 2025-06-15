
# 🧾 AuthenticationPage — Detalhamento do Componente

Este documento explica passo a passo a implementação do componente `AuthenticationPage`, responsável por gerenciar as telas de **login** e **cadastro de usuários** utilizando `react-hook-form`, `zod` e os componentes visuais do `shadcn/ui`.

---

## 📦 Estrutura Geral

O componente possui duas abas principais, usando o componente `Tabs`:

- **Login**
- **Criar conta**

A troca entre as abas é feita de forma responsiva e moderna com `TabsTrigger`.

```tsx
<Tabs defaultValue="login">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Criar conta</TabsTrigger>
  </TabsList>
  <TabsContent value="login">...</TabsContent>
  <TabsContent value="register">...</TabsContent>
</Tabs>
```

---

## 🔐 Formulário de Login

### Schema de Validação

Valida o e-mail e a senha:

```ts
const loginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
});
```

### Estrutura do Formulário

```tsx
<Form {...loginForm}>
  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
    <Card>
      <CardHeader>...</CardHeader>
      <CardContent>...Campos...</CardContent>
      <CardFooter>...Botão...</CardFooter>
    </Card>
  </form>
</Form>
```

---

## 📝 Formulário de Cadastro

### Schema de Validação

Valida nome, email, senha e confirmação de senha:

```ts
const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});
```

### Estrutura do Formulário

Idêntico ao login, mas com 4 campos. Utiliza `FormField`, `FormItem`, `FormLabel`, `Input` e `FormMessage` para cada campo.

---

## 💅 Estilização e Layout

### Tailwind Classes Utilizadas

| Classe         | Descrição                                  |
|----------------|---------------------------------------------|
| `space-y-4`    | Espaçamento vertical entre os campos       |
| `mb-1`         | Margem inferior do título (`CardTitle`)    |
| `pt-2`         | Padding-top no `CardFooter`                |
| `w-full`       | Botão ocupando toda a largura              |

---

## ✅ Comportamento

- Ao enviar o formulário, os dados são validados com `zod`.
- Se forem válidos, são exibidos no console.
- (Você pode adaptar facilmente para consumir uma API real com `fetch` ou `axios`.)

---

## 📎 Referência no README principal

No seu `README.md`, adicione:

```md
➡️ Veja o detalhamento do componente de autenticação [aqui](./docs/authentication-page.md).
```

---

## 🚀 Melhorias futuras (sugestões)

- Adicionar validação de igualdade entre senha e confirmação.
- Exibir toast de feedback.
- Mostrar loading no botão enquanto envia.
- Conectar com backend (ex: NextAuth, JWT, API REST).
