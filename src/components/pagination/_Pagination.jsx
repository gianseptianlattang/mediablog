import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";

export const PaginationCard = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the total number of pages in your data
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {});

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
