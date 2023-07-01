import { menuItems } from '@org/shared/utility';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import MenuItem from '../menu-item/menu-item';
/* eslint-disable-next-line */
export interface MenuProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  onToggleMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Menu({
  className = '',
  orientation = 'horizontal',
  onToggleMenu,
}: MenuProps) {
  const handleClose = useCallback(() => {
    if (onToggleMenu) {
      onToggleMenu(false);
    }
  }, [onToggleMenu]);
  const flowStyle = useMemo<string>(() => {
    return classNames('flex items-center gap-2', {
      'flex-col': orientation === 'vertical',
    });
  }, [orientation]);
  const memoMenuItems = useMemo(() => {
    return menuItems;
  }, []);
  const memoMenuItemsEl = useMemo(() => {
    return memoMenuItems.map((item, i) => {
      return (
        <MenuItem
          key={item.id}
          menuItem={{ to: item.to, title: item.title }}
          callback={handleClose}
        />
      );
    });
  }, [memoMenuItems, handleClose]);
  return <nav className={`${className} ${flowStyle}`}>{memoMenuItemsEl}</nav>;
}

export default Menu;
