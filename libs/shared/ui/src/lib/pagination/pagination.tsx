import { IconButton, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export function Pagination() {
  const [active, setActive] = useState(1);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: active === index ? 'blue-gray' : 'blue-gray',
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <button
        type="button"
        className="flex justify-between items-center gap-2 disabled:text-gray-500"
        onClick={prev}
        disabled={active === 1}
      >
        <HiArrowLeft strokeWidth={2} className="h-4 w-4" />
        <Typography variant="text" className="text-xs">
          Previous
        </Typography>
      </button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <button
        type="button"
        className="flex items-center justify-between gap-2 disabled:text-gray-500"
        onClick={next}
        disabled={active === 5}
      >
        <Typography variant="text" className="text-xs">
          Next
        </Typography>
        <HiArrowRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Pagination;
