import React, { createContext, useContext, useState } from 'react';

interface MenuContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

interface MenuProviderProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

// conceito de broadcast
export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen,
    toggleMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      'É necessário estar no contexto de MenuContext para utilizar este hook'
    );
  }

  return context;
};
