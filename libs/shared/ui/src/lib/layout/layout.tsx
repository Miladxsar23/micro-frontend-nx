import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
/* eslint-disable-next-line */

export function Layout() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-12 grid-rows-[73px_minmax(800px,_1fr)_200px] gap-y-4'>
      <Header className='col-span-1 md:col-span-12'/>
      <Main className='col-span-1 md:col-span-12'/>
      <Footer className='col-span-1 md:col-span-12'/>
    </section>
  );
}

export default Layout;
