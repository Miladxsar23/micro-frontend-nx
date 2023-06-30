import { Typography } from '@material-tailwind/react';
import * as React from 'react';
/* eslint-disable-next-line */
export interface LogoProps {
  companyName: string;
}

export function Logo({companyName }: LogoProps) {
  return (
    <section
      className="flex items-center gap-1"
    >
      {/* logo image */}
      <div className="relative  rounded-md flex justify-center items-center">
        <div className="w-8 h-8 bg-gradient-to-b from-white to-blue-gray-200 rounded-lg flex justify-center items-center">
          <div className='w-5 h-5 rounded-full bg-indigo-600'></div>
        </div>
      </div>
      {/*logo title  */}
      <Typography variant="paragraph" className="hidden md:block font-bold text-lg text-gray-900">{companyName}</Typography>
    </section>
  );
}

export default React.memo(Logo);
