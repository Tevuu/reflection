export const PageNavButton = ({ currentpage, number, setCurrentPage }) => {
  return (
    <>
      {currentpage == number ? (
        <div className="w-8 h-8 bg-black/80 duration-200 rounded-full text-white items-center flex justify-center cursor-pointer">
          {number}
        </div>
      ) : (
        <div
          className="w-8 h-8 bg-black/40 hover:bg-black/80 duration-200 rounded-full text-white items-center flex justify-center cursor-pointer"
          onClick={() => {
            setCurrentPage(number);
          }}>
          {number}
        </div>
      )}
    </>
  );
};
