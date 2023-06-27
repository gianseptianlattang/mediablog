import React from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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

  const handlePageChange = (page) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <Box>
      <ButtonGroup spacing={2}>
        {currentPage !== 1 && (
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
        )}
        {getPageNumbers().map((page, index) => (
          <Button
            key={index}
            variant={currentPage === page ? "solid" : "outline"}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        {currentPage !== totalPages && (
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        )}
      </ButtonGroup>
      <Text fontSize="sm" textAlign="center" mt={2}>
        Page {currentPage} of {totalPages}
      </Text>
    </Box>
  );
};

export default Pagination;
