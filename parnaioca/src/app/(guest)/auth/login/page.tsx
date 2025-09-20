'use client';

import { useEffect, useState } from 'react';

// CSS-in-JS
import Field from '@/components/atoms/Field';
import useAuth from '@/hooks/useAuth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const { storeUser, verifyAuth } = useAuth();

  const onSubmit = () => {
    // ativar um método que leve o usuário até o dashboard caso o
    // login e senha estejam corretos

    if (!email.length) {
      console.error('E-mail está nulo');
      return;
    }

    if (!password.length) {
      console.error('Senha está nula');
      return;
    }

    console.log('email', email);
    console.log('password', password);

    // TODO verificar se o e-mail e senha são válidos no banco de dados

    storeUser({
      email,
    });
    return;
  };

  useEffect(() => {
    verifyAuth();

    setLoading(false);
  }, [verifyAuth]);

  return (
    <>
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className="flex justify-center">
          <div className="w-md">
            <Field
              label="E-mail"
              type="email"
              onChangeValue={(value: string) => setEmail(value)}
            >
              <div style={{ color: 'red' }}>Espaço dentro da tag HTML</div>
            </Field>

            <Field
              label="Senha"
              type="password"
              onChangeValue={(value: string) => setPassword(value)}
            />

            <div className="text-center">
              <button
                onClick={() => onSubmit()}
                className="border rounded px-4 my-4 cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
