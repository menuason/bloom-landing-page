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
    <nav
      className="
        lg:hidden
        md:flex md:items-center md:justify-end
        xs:flex xs:items-center xs:justify-end"
    >
      <ul className="flex justify-end items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowLeftIcon width={8} height={8} color={"black"} />
        </button>

        {pageNumbers.map((number, ind) => (
          <li key={ind} className="page-item">
            <button
              onClick={() => onPageChange(number)}
              className={`flex ${
                currentPage === number ? "black" : "text-neutral-500"
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        <button
          disabled={currentPage === pageNumbers.length}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ArrowRightIcon width={8} height={8} color={"black"} />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
