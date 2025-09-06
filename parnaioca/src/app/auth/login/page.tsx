'use client';

import { useState } from 'react';

// CSS-in-JS
import Field from '@/components/Field';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('email', email);
    console.log('password', password);
  };

  return (
    <div className="flex justify-center">
      <div className="w-md">
        <Field
          label="E-mail"
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
  );
};

export default LoginPage;
