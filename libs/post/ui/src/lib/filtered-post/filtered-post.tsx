import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react';
import { CiMenuKebab } from 'react-icons/ci';
export function FilteredPost() {
  return (
    <section className="flex justify-between items-start">
      <Typography variant="paragraph" className='text-sm font-bold'>Recent posts</Typography>
      <Menu placement="top-end">
        <MenuHandler>
          <IconButton variant="text">
            <CiMenuKebab className="h-5 w-5 stroke-blue-gray-700" />
          </IconButton>
        </MenuHandler>
        <MenuList className="flex flex-col gap-2">
          <MenuItem>Newest</MenuItem>
          <MenuItem>Sort</MenuItem>
        </MenuList>
      </Menu>
    </section>
  );
}

export default FilteredPost;
