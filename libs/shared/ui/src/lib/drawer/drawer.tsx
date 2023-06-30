import classNames from 'classnames';
import * as React from 'react';
import { HiXMark } from 'react-icons/hi2';
/* eslint-disable-next-line */
export interface DrawerProps {
  isMenuOpen: boolean;
  onToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  headerTitle: string;
  orientation?: 'left' | 'right';
}

export const Drawer = React.memo(function ({
  isMenuOpen,
  onToggleMenu,
  headerTitle,
  children = [],
  orientation = 'right',
}: DrawerProps) {
  const handleClose = React.useCallback(() => {
    onToggleMenu(false);
  }, [onToggleMenu]);
  return (
    <section
      className={classNames(
        'fixed overflow-hidden z-10 inset-0 transform ease-in-out',
        {
          invisible: !isMenuOpen,
        }
      )}
    >
      {/* Menu section */}
      <section
        className={classNames(
          'w-screen max-w-xs absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform z-20',
          {
            'right-0': orientation === 'right',
            'left-0': orientation !== 'right',
            'translate-x-0': isMenuOpen,
            'translate-x-full': !isMenuOpen && orientation === 'right',
            '-translate-x-full': !isMenuOpen && orientation !== 'right',
          }
        )}
      >
        <article className="relative w-screen max-w-xs pb-10 flex flex-col gap-8 overflow-y-auto h-full p-8">
          <section className="flex w-full justify-between items-center px-6 mb-2">
            <h3 className="font-bold">{headerTitle}</h3>
            <HiXMark
              className="w-5 h-5 cursor-pointer transition hover:scale-125"
              onClick={handleClose}
            />
          </section>
          {children}
        </article>
      </section>
      {/* backdrop */}
      <section
        className={
          'bg-gray-900 bg-opacity-50 w-screen h-full cursor-pointer backdrop-filter backdrop-blur-sm transition' +
          (!isMenuOpen && 'transition delay-300 duration-300 opacity-0 invisible')
        }
        onClick={() => {
          onToggleMenu(false);
        }}
      ></section>
    </section>
  );
});
export default React.memo(Drawer);
