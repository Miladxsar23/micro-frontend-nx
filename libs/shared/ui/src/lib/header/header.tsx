import Logo from '../logo/logo';
import Menu from '../menu/menu';
import SearchBar from '../search-bar/search-bar';
import UserProfile from '../user-profile/user-profile';

export function Header() {
  return (
    <header className="w-full h-20 flex justify-between items-center px-8">
      {/* Navbar */}
      <section className="w-1/3 flex items-center">
        <Logo width='w-1/4' height='h-full' companyName='Utilited ui'/>
        <Menu />
      </section>
      {/* Searchbar & UserProfile */}
      <section className="w-1/3 flex items-center">
        <SearchBar />
        <UserProfile />
      </section>
    </header>
  );
}

export default Header;
