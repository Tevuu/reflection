import { useState } from "react";

export const Search = ({
  changeResult,
  changeTotalResultsCount,
  getRequest,
}) => {
  const [request, setRequest] = useState("");

  async function onEnter(event) {
    if (event.key === "Enter" && request.length) {
      fetch(`${import.meta.env.VITE_GOOGLE_SEARCH_API_LINK}&q=${request}`)
        .then((response) => response.json())
        .then((response) => {
          changeResult(response.items);
          changeTotalResultsCount(response);
          getRequest(request);
        });
    }
  }

  return (
    <div className="flex col items-center w-1/2 min-w-[300px] relative">
      <img
        src="https://i.postimg.cc/kMRSsPTN/png.png"
        alt="magnifier"
        className="absolute w-6 h-6 left-[12px] grayscale-0 select-none"
      />
      <input
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        name="search"
        type="text"
        onKeyDown={onEnter}
        autoComplete="off"
        placeholder="Введите запрос"
        className="w-full  h-12 px-2 pb-[2px] pl-[40px] rounded-3xl text-lg text-[14px] placeholder-neutral-500 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] outline-none"
      />
    </div>
  );
};
