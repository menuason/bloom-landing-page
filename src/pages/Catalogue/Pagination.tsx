import { FC } from "react";
import { ArrowLeftIcon } from "../../../public/icons/arrowLeft/arrowLeft";
import { ArrowRightIcon } from "../../../public/icons/arrowRight/arrowRight";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (x: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="flex lg:hidden md:flex md:items-center md:justify-center xs:flex xs:items-center xs:justify-center">
      <span className="flex justify-center items-center gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="text-bloomBody disabled:text-gray-400"
        >
          <ArrowLeftIcon width={15} height={15} color="#323232" />
        </button>

        <>
          <p className="text-lg text-bloomBody">{currentPage}</p>
          <p className="text-lg text-bloomBody"> of {pageNumbers.length}</p>
        </>

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="text-bloomBody disabled:text-gray-400"
        >
          <ArrowRightIcon width={15} height={15} color="#323232" />
        </button>
      </span>
    </nav>
  );
};

export default Pagination;
