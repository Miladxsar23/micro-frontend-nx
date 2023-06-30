import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import * as React from 'react';
import avatarDefault from '../assets/avatar.jpg';

import { HiOutlineEnvelope, HiOutlineUserCircle } from 'react-icons/hi2';
import { TbPower } from 'react-icons/tb';

/* eslint-disable-next-line */
export interface UserProfileProps {
  imageUrl?: string;
  className?:string
}

export const UserProfile = React.memo(function ({
  imageUrl,
  className = ''
}: UserProfileProps) {
  return (
    <section className={`relative flex justify-center items-center h-8 w-8 min-w-[32px] ${className}`}>
      {/* ping dot */}
      <span className="animate-ping absolute right-0.5 top-0.5 inline-flex h-2 w-2 rounded-full z-10 bg-green-700 opacity-75"></span>
      <span className="absolute right-0.5 top-0.5 inline-flex h-2 w-2 rounded-full z-10 bg-green-700 "></span>
      {/* avatar image */}
      <Menu
        placement="top-end"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Avatar
            className="w-6 h-6 cursor-pointer shadow-lg"
            src={imageUrl || avatarDefault}
            alt="user_avatar"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2 my-2">
            <HiOutlineUserCircle strokeWidth={2} className="h-4 w-4" />
            <Typography className="font-normal text-xs">My profile</Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2 my-2">
            <HiOutlineEnvelope strokeWidth={2} className="h-4 w-4" />
            <Typography className="font-normal text-xs">Tickets</Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 my-2 ">
            <TbPower strokeWidth={2} className="h-4 w-4" />
            <Typography className="font-normal text-xs">Logout</Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </section>
  );
});
export default React.memo(UserProfile);
