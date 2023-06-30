import { useCallback } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Drawer from '../drawer/drawer';
import Menu from '../menu/menu';
/* eslint-disable-next-line */
export interface HumbergerMenuProps {
  className?: string;
  isMenuOpen: boolean;
  onToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HumbergerMenu({
  className = '',
  isMenuOpen,
  onToggleMenu,
}: HumbergerMenuProps) {
  const handleToggleMenu = useCallback(() => {
    onToggleMenu(!isMenuOpen);
  }, [isMenuOpen, onToggleMenu]);
  return (
    <section className={className}>
      <HiBars3BottomRight
        className="w-5 h-5 cursor-pointer stroke-gray-800"
        onClick={handleToggleMenu}
      />
      <Drawer
        onToggleMenu={onToggleMenu}
        isMenuOpen={isMenuOpen}
        headerTitle="Utilited Logo"
      >
        <Menu orientation='vertical'/>
      </Drawer>
    </section>
  );
}

export default HumbergerMenu;
