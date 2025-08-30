'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export const UsersDynamicPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Olá mundo dinamico {params.id}</h1>
      <Link href="/users">Clique aqui para ir para listagem de usuários</Link>
    </div>
  );
};

export default UsersDynamicPage;
