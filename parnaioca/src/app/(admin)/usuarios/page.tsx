'use client';

import ButtonCreate from '@/components/atoms/ButtonCreate';
import Link from 'next/link';

export const UsuariosPage = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>Total de 5 funcionários cadastrados</div>
        <ButtonCreate />
      </div>

      {pages.map((page) => (
        <div key={page}>
          <Link href={`/usuarios/${page}`}>
            Clique aqui para ir para a página {page}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsuariosPage;
