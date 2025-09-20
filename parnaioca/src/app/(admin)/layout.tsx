'use client';

import Menu from '@/components/molecules/Menu';
import Navbar from '@/components/atoms/Navbar';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const { verifyGuest, email } = useAuth();

  useEffect(() => {
    verifyGuest();

    setLoading(false);
  }, [verifyGuest]);
  return (
    <>
      {loading ? (
        <>Carregando</>
      ) : (
        <>
          <Menu email={email} />
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
