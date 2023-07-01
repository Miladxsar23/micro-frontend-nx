import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MainProps {
  className?: string;
}

export function Main({ className = '' }: MainProps) {
  return (
    <main className={`${className} px-8`}>
      <Outlet />
    </main>
  );
}

export default Main;
