import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// ✅ Apenas o schema de cadastro, já que é o SignUpForm
const registerSchema = z.object({
  name: z.string().trim().min(1, { message: 'Nome é obrigatório' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'E-mail é obrigatório' })
    .email({ message: 'E-mail inválido' }),
  password: z.string().trim().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
});

const SignUpForm = () => {
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSignUpSubmit(values: z.infer<typeof registerSchema>) {
    console.log('Cadastro:', values);
  }

  return (
    <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(onSignUpSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="mb-1 text-lg">Criar conta</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Crie uma conta para continuar.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <FormField
              control={registerForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="exemplo@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="pt-2">
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default SignUpForm;
