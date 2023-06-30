import Header from '../header/header';
import Main from '../main/main';
/* eslint-disable-next-line */

export function Layout() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-12 grid-rows-[73px_minmax(800px,_1fr)] gap-y-4 mb-16'>
      <Header className='col-span-1 md:col-span-12'/>
      <Main className='col-span-1 md:col-span-12'/>
    </section>
  );
}

export default Layout;
