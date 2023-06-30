import classNames from 'classnames';
import * as React from 'react';
/* eslint-disable-next-line */
export interface MenuItemProps {
  key: string | number;
  isActive: boolean;
  title: string;
  onItemclick: () => void;
}

export const MenuItem = React.memo(function ({
  isActive,
  title,
  onItemclick,
}: MenuItemProps) {
  // classes
  const liClass = classNames(
    `w-full flex justify-start items-center gap-2 px-2 py-2 rounded-md cursor-pointer transition`,
    {
      [`bg-blue-50 text-blue-800`]: isActive,
      [`text-blue-gray-200`]: !isActive,
    }
  );
  const pClass = classNames(`text-xs font-semibold`, {
    [`text-blue-600`]: isActive,
    [`text-blue-gray-600`]: !isActive,
  });

  return (
    <li className={liClass} onClick={onItemclick}>
      <p className={pClass}>{title}</p>
    </li>
  );
});

export default React.memo(MenuItem);
