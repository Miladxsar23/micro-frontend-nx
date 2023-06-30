import { RiSearchLine } from 'react-icons/ri';

interface SearchBarProps {
  className?:string
  placeholder: string;
}

function SearchBar({ placeholder, className='' }: SearchBarProps) {
  return (
    <div className={`flex items-center relative h-10 ${className} `}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-1 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:text-blue-gray-600"
      />
      <div className="absolute left-3">
        <RiSearchLine className="w-4 h-4 text-blue-gray-400" />
      </div>
    </div>
  );
}

export default SearchBar;
