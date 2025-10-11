'use client';

import CardTotal from '@/components/atoms/CardTotal';
import CardInfo from '@/components/molecules/CardInfo';
import { getAllUsers } from '@/services/users/getAll';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [userCount, setUserCount] = useState(0);

  const fetchUsersData = async () => {
    const users = await getAllUsers();
    setUserCount(users.length);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <main>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardTotal />
        <CardTotal />
        <CardTotal />
        <CardTotal /> {userCount}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CardInfo />
        <CardInfo />
      </div>
    </main>
  );
};

export default DashboardPage;
