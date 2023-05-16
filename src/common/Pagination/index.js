import { useState } from "react"
import { PageButton, PageCount, PageText, Pages, PaginationContainer } from "./styled"

const Pagination = () => {
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
                First
            </PageButton>
            <PageButton
                isPrevious
                onClick={handlePreviousPageClick}>
                Previous
            </PageButton>
            <Pages>
                <PageText>
                    Page{' '}
                    <PageCount id="currentPage">
                        {currentPage}
                    </PageCount>
                </PageText>
                <PageText> of{' '}
                    <PageCount id="totalPages">
                        {totalPages}
                    </PageCount>
                </PageText>
            </Pages>
            <PageButton
                isNext
                onClick={handleNextPageClick}>
                Next
            </PageButton>
            <PageButton
                isLast
                onClick={handleLastPageClick}>
                Last
            </PageButton>
        </PaginationContainer>
    );
};

export default Pagination;