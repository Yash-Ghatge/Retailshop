const Pagination = ({ page, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center gap-2 mt-8">
      <button
        type="button"
        aria-label="Previous"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={`mr-4 ${page === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L2 9.24242L11 17"
            stroke="#111820"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex gap-2 text-gray-500 text-sm md:text-base">
        {pages.map((pageNum) => (
          <button
            key={pageNum}
            type="button"
            onClick={() => onPageChange(pageNum)}
            className={`flex items-center justify-center active:scale-95
              w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md transition-all 
              ${
                page === pageNum
                  ? "bg-indigo-500 text-white"
                  : "bg-white border border-gray-200 hover:bg-gray-100/70"
              }
            `}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className={`ml-4 ${
          page === totalPages ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 12 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L10 9.24242L1 17"
            stroke="#111820"
            strokeOpacity="0.7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
