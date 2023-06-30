import { menuItems } from '@org/shared/utility';
import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import MenuItem from '../menu-item/menu-item';
/* eslint-disable-next-line */
export interface MenuProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export function Menu({
  className = '',
  orientation = 'horizontal',
}: MenuProps) {
  const [activeMenu, setActiveMenu] = useState(1);
  const flowStyle = useMemo<string>(() => {
    return classNames('flex items-center gap-2', {
      'flex-col': orientation === 'vertical',
    });
  }, [orientation]);
  const handleItemClick = useCallback((itemIndex: number) => {
    setActiveMenu(itemIndex);
  }, []);
  const memoMenuItems = useMemo(() => {
    return menuItems;
  }, []);
  const memoMenuItemsEl = useMemo(() => {
    return memoMenuItems.map((menuItem, i) => {
      return (
        <MenuItem
          key={menuItem.id}
          title={menuItem.title}
          isActive={activeMenu === i}
          onItemclick={() => handleItemClick(i)}
        />
      );
    });
  }, [memoMenuItems, activeMenu, handleItemClick]);
  return <nav className={`${className} ${flowStyle}`}>{memoMenuItemsEl}</nav>;
}

export default Menu;
