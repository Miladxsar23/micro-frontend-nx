import { useState } from 'react';
import HumbergerMenu from '../humberger-menu/humberger-menu';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import SearchBar from '../search-bar/search-bar';
import UserProfile from '../user-profile/user-profile';
interface HeaderProps {
  className?: string;
}
export function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header
      className={`${className} flex justify-between items-center px-8 relative border-b`}
    >
      {/* Navbar */}
      <section className="flex-auto flex items-center gap-2">
        <Logo companyName="Utilited UI" />
        <Menu className="hidden md:flex" />
      </section>
      {/* Searchbar & UserProfile */}
      <section className="flex justify-end w-1/2 items-center gap-3 md:gap-1">
        <SearchBar className='md:w-3/4' placeholder="Search..."/>
        <UserProfile />
        <HumbergerMenu className="md:hidden" isMenuOpen={isMenuOpen} onToggleMenu={setMenuOpen} />
      </section>
    </header>
  );
}

export default Header;
