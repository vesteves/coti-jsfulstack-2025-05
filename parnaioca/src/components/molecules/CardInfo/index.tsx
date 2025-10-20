'use client';

import { useMenuContext } from '@/context/MenuContext';
import { useState } from 'react';

const CardInfo = () => {
  const { toggleMenu } = useMenuContext();

  const [color, setColor] = useState('text-green-500');

  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between mb-8">
        <div>Title</div>
      </div>

      <button onClick={() => toggleMenu()}>
        Clique Aqui para Abrir/Fechar o Menu
      </button>

      <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
        <div>
          <div className="font-bold">João Silva</div>
          <div>Suite Master</div>
        </div>

        <div>
          <div className="font-bold">R$ 350,00</div>
          <div>2024-01-15</div>
        </div>
      </div>

      <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
        <div>
          <div className="font-bold">Maria Silva</div>
          <div>Suite Master</div>
        </div>

        <div>
          <div className="font-bold">R$ 350,00</div>
          <div>2024-01-15</div>
        </div>
      </div>

      <button onClick={() => setColor('bg-red-500')} className={color}>
        Clique Aqui para alterar cor
      </button>
    </div>
  );
};

export default CardInfo;
