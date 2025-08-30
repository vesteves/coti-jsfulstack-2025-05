'use client';

import Link from 'next/link';

export const UsersPage = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1>Olá mundo</h1>

      {pages.map((page) => (
        <div key={page}>
          <Link href={`/users/${page}`}>
            Clique aqui para ir para a página {page}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
