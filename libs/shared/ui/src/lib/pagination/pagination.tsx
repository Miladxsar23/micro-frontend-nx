import { IconButton, Typography } from '@material-tailwind/react';
import { useCallback, useMemo } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export interface PaginationProps {
  activePage: number;
  dataLength: number;
  pageLength: number;
  onPageChange: (pageNumber: number) => void;
}
export function Pagination({
  activePage,
  dataLength,
  onPageChange,
  pageLength,
}: PaginationProps) {
  const totalPage = useMemo(
    () => Math.ceil(dataLength / pageLength),
    [dataLength, pageLength]
  );
  const getItemProps = useCallback(
    (index: number) =>
      ({
        variant: activePage === index ? 'filled' : 'text',
        color: activePage === index ? 'blue-gray' : 'blue-gray',
        onClick: () => onPageChange(index),
      } as any),
    [activePage, onPageChange]
  );

  const next = useCallback(() => {
    if (activePage === totalPage) return;

    onPageChange(activePage + 1);
  }, [activePage, onPageChange, totalPage]);

  const prev = useCallback(() => {
    if (activePage === 1) return;

    onPageChange(activePage - 1);
  }, [activePage, onPageChange]);

  const memoPageButtons = useMemo(() => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => {
        return (
          <IconButton key={pageNumber} {...getItemProps(pageNumber)}>
            {pageNumber}
          </IconButton>
        );
      }
    );
  }, [totalPage, getItemProps]);
  return (
    <div className="w-full flex justify-between items-center">
      <button
        type="button"
        className="flex justify-between items-center gap-2 disabled:text-gray-500"
        onClick={prev}
        disabled={activePage === 1}
      >
        <HiArrowLeft strokeWidth={2} className="h-4 w-4" />
        <Typography variant="paragraph" className="text-xs">
          Previous
        </Typography>
      </button>
      <div className="flex items-center gap-2">{memoPageButtons}</div>
      <button
        type="button"
        className="flex items-center justify-between gap-2 disabled:text-gray-500"
        onClick={next}
        disabled={activePage === totalPage}
      >
        <Typography variant="paragraph" className="text-xs">
          Next
        </Typography>
        <HiArrowRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Pagination;
