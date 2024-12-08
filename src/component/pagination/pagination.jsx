import React from 'react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const visiblePages = 3; // Jumlah tombol halaman yang akan ditampilkan
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // Adjust startPage jika endPage melebihi totalPages
    const adjustedStartPage = Math.max(1, endPage - visiblePages + 1);

    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          } transition-all`}
        >
          {i}
        </button>
      );
    }

    return (
      <>
        {/* Ellipsis di awal jika diperlukan */}
        {adjustedStartPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-all"
            >
              1
            </button>
            <span className="text-gray-400">...</span>
          </>
        )}

        {pageNumbers}

        {/* Ellipsis di akhir jika diperlukan */}
        {endPage < totalPages && (
          <>
            <span className="text-gray-400">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-all"
            >
              {totalPages}
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <div className="flex justify-center items-center gap-3 text-sm">
      {/* Tombol Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-all ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Previous
      </button>

      {/* Nomor Halaman */}
      {renderPageNumbers()}

      {/* Tombol Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-all ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
      </button>
    </div>
  );
};
