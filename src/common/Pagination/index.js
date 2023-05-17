import { useState } from "react"
import { PageButton, PageButtonsFirst, PageButtonsLast, PageCount, PageText, Pages, PaginationContainer, StyledSpan } from "./styled"

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handleFirstPageClick = () => {
        setCurrentPage(1);
    };

    const handlePreviousPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleLastPageClick = () => {
        setCurrentPage(totalPages);
    };

    return (
        <PaginationContainer>
            <PageButton
                isFirst
                onClick={handleFirstPageClick}>
                <StyledSpan>First</StyledSpan>
            </PageButton>
            <PageButton
                isPrevious
                onClick={handlePreviousPageClick}>
                <StyledSpan>Previous</StyledSpan>
            </PageButton>
            <Pages>
                <PageText>
                    Page{' '}
                    <PageCount id="currentPage">
                        {currentPage}
                    </PageCount>
                </PageText>
                <PageText>of{' '}
                    <PageCount id="totalPages">
                        {totalPages}
                    </PageCount>
                </PageText>
            </Pages>
            <PageButton
            isNext
                onClick={handleNextPageClick}>
                <StyledSpan>Next</StyledSpan>
            </PageButton>
            <PageButton
            isLast
                onClick={handleLastPageClick}>
                <StyledSpan>Last</StyledSpan>
            </PageButton>
        </PaginationContainer>
    );
};
