'use client';

import Drawer from '@/icons/Drawer';

type NavbarProps = {
  handleDrawerChange: () => void;
};

const Navbar = ({ handleDrawerChange }: NavbarProps) => {
  return (
    <nav className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex gap-2">
        <div onClick={() => handleDrawerChange()}>
          <Drawer />
        </div>
        <div>Title</div>
      </div>
      <div className="flex gap-2 items-center">
        <div>icon</div>
        <div>icon</div>
        <div className="bg-gray-200 flex font-semibold items-center justify-center p-2 rounded-full">
          VE
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
