import React, { useState } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

export const PaginationCard = () => {
  const dataPage = useSelector((state) => state.blogUser.pageBlog);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = dataPage.page;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
