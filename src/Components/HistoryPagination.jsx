import { useEffect, useState } from "react";
import ButtonPagination from "./buttonPagination";

const HistoryPagination = ({
  totalHistory,
  historyPerPage,
  setCurrentPage,
  currentPage,
  className,
}) => {
  const [slicePage, setSlicePage] = useState([]);
  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalHistory / historyPerPage); i++) {
      pages.push(i);
    }
    const blockStart = Math.floor((currentPage - 1) / historyPerPage) * historyPerPage;
    const currentSlice = pages.slice(blockStart, blockStart + historyPerPage);
    setSlicePage(currentSlice);
  }, [currentPage, totalHistory ]);

  return (
    <div className={className}>
      <ButtonPagination
        page="<"
        currentPage={currentPage}
        onClick={() => setCurrentPage((currentPage == 1) ? currentPage : currentPage - 1)}
      />
      {slicePage.map((page, index) => (
        <ButtonPagination
          key={index}
          page={page}
          currentPage={currentPage}
          onClick={() => setCurrentPage(page)}
        />
      ))}
      <ButtonPagination
        page=">"
        currentPage={currentPage}
        onClick={() => setCurrentPage((currentPage == Math.ceil(totalHistory / historyPerPage)) ? currentPage : currentPage + 1)}
      />
    </div>
  );
};

export default HistoryPagination;
