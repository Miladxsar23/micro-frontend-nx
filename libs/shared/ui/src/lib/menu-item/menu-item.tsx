import { MenuItemType } from '@org/shared/utility';
import classNames from 'classnames';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/* eslint-disable-next-line */
export interface MenuItemProps {
  key: string | number;
  menuItem:MenuItemType
  callback?: () => void;
}

export const MenuItem = React.memo(function ({
  menuItem : {to, title},
  callback,
}: MenuItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveMemo = React.useMemo(() => {
    let active = false;
    if (location.pathname === to) {
      active = true;
    }
    if (to !== '/' && location.pathname.includes(to)) {
      active = true;
    }
    return active;
  }, [location, to]);

  const handleMenuItem = () => {
    if (to) navigate(to);
    if (callback) callback();
  };
  // classes
  const liClass = classNames(
    `w-full flex justify-start items-center gap-2 px-2 py-2 rounded-md cursor-pointer transition`,
    {
      [`bg-blue-50 text-blue-800`]: isActiveMemo,
      [`text-blue-gray-200`]: !isActiveMemo,
    }
  );
  const pClass = classNames(`text-xs font-semibold`, {
    [`text-blue-600`]: isActiveMemo,
    [`text-blue-gray-600`]: !isActiveMemo,
  });

  return (
    <li className={liClass} onClick={handleMenuItem}>
      <p className={pClass}>{title}</p>
    </li>
  );
});

export default React.memo(MenuItem);
