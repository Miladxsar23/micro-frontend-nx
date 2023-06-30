import { Heights, Widths } from '@org/shared/utility';
import * as React from 'react';
/* eslint-disable-next-line */
export interface LogoProps {
  width: Widths;
  height: Heights;
  companyName:string
}

export function Logo({ width, height, companyName }: LogoProps) {
  return (
    <section className={`${width} ${height} flex items-center justify-center gap-2`}>
      {/* logo image */}
      <div className='relative h-full w-1/3 bg-blue-gray-200 rounded-md flex justify-center items-center'>
        <div className='w-1/3 h-1/3 rounded-full bg-indigo-700'></div>
      </div>
      {/*logo title  */}
      <div className='w-2/3'>
        {companyName}
      </div>
    </section>
  )
}

export default React.memo(Logo);
