const Pagination = ({
  count,
  onChange,
  currentPage,
}: {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
}) => {
  return (
    <div className="flex gap-4">
      <button
        className="border border-blue-600 text-blue dark:border-white dark:text-white p-4 rounded-lg "
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {new Array(count).fill(null).map((_, i) => (
        <button
          className={`border border-blue-600 text-blue dark:border-white dark:text-white p-4 rounded-lg w-[50px]
            ${i + 1 === currentPage ? "bg-blue-600 text-white" : ""}`}
          key={`page-number-${i + 1}`}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="border border-blue-600 text-blue dark:border-white dark:text-white p-4 rounded-lg "
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === count}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
