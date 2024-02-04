export const PageNavButton = ({
  currentPage,
  setCurrentPage,
  request,
  result,
  changeResult,
}) => {
  function changePage(page) {
    fetch(
      `${import.meta.env.VITE_GOOGLE_SEARCH_API_LINK}&q=${request}&start=${
        ++result.length * --page
      }`
    )
      .then((response) => response.json())
      .then((response) => changeResult(response.items));
  }

  return (
    <>
      {currentPage === 1 ? (
        <button className="w-8 h-8 bg-black/20 duration-200 rounded-full text-white items-center flex justify-center cursor-pointer">
          {"<"}
        </button>
      ) : (
        <button
          className="w-8 h-8 bg-black/80 duration-200 rounded-full text-white items-center flex justify-center cursor-pointer"
          onClick={async () => {
            await setCurrentPage(--currentPage);

            await changePage(currentPage);
          }}
        >
          {"<"}
        </button>
      )}

      <button
        className="w-8 h-8 bg-black/80 duration-200 rounded-full text-white items-center flex justify-center cursor-pointer"
        onClick={async () => {
          await setCurrentPage(++currentPage);

          await changePage(currentPage);
        }}
      >
        {">"}
      </button>
    </>
  );
};
