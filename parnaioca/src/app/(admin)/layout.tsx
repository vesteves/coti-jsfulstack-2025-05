'use client';

import Menu from '@/components/molecules/Menu';
import Navbar from '@/components/atoms/Navbar';
import { useEffect, useState } from 'react';
import useAuth from '@/hooks/useAuth';
import { MenuProvider, useMenuContext } from '@/context/MenuContext';

function AdminContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const { verifyGuest, email } = useAuth();
  const { isOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    verifyGuest();

    setLoading(false);
  }, [verifyGuest]);
  return (
    <>
      {loading ? (
        <>Carregando</>
      ) : (
        <div>
          <div className="flex gap-2">
            <div className={isOpen ? 'w-[16rem]' : 'hidden'}>
              <Menu email={email} />
            </div>
            <div className="w-full">
              <Navbar handleDrawerChange={() => toggleMenu()} />
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <AdminContent>{children}</AdminContent>
    </MenuProvider>
  );
}
