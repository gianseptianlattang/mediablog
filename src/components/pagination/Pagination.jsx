import React, { useEffect } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../service/reducer/blogReducer";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const dispatch = useDispatch();
  const idCategory = useSelector(
    (state) => state.blogUser.requestBlogByCategory.id_cat
  );

  const getPageNumbers = () => {
    const delta = 1;
    const range = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    range.push(totalPages);

    return range;
  };

  useEffect(() => {
    console.log(`idCategory ${idCategory}`);
    handlePageChange(1);
  }, [idCategory]);

  const handlePageChange = (page) => {
    if (typeof page === "number") {
      onPageChange(page);
      console.log(idCategory, page);
      dispatch(
        fetchCard(
          idCategory == 0
            ? `api/blog?sort=DESC&page=${page}&size=12`
            : `api/blog?id_cat=${idCategory}&sort=DESC&page=${page}&size=12`
        )
      );
    }
  };

  return (
    <Box>
      <ButtonGroup spacing={1} colorScheme="orange">
        {currentPage !== 1 && (
          <Button
            fontSize={"sm"}
            w={"100px"}
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
        )}
        {getPageNumbers().map((page, index) => (
          <Button
            fontSize={"sm"}
            key={index}
            variant={currentPage === page ? "solid" : "outline"}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        {currentPage !== totalPages && (
          <Button
            fontSize={"sm"}
            w={"100px"}
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
