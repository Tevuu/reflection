import { Card } from "./Card";
import { useState } from "react";
import { Search } from "./Search";
import { PageNavButton } from "./UI/PageNavButton";

export const Home = ({ open }) => {
  const [result, setResult] = useState([]);

  const [totalResultsCount, setTotalResultsCount] = useState(0);

  function changeResult(data) {
    setResult([...data]);
  }

  const [currentPage, setCurrentPage] = useState(1);

  async function changeTotalResultsCount(response) {
    await setTotalResultsCount(+response.queries.request[0].totalResults);
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex flex-col items-center w-full justify-between overflow-auto">
          <div className="flex w-[90%] flex-col justify-center items-center mt-20 gap-4">
            <Search
              changeResult={changeResult}
              changeTotalResultsCount={changeTotalResultsCount}
              resultsCountOfCurrentPage={result.length}
            />
            <div className="flex flex-row gap-4 text-sm lg:text-base">
              <div className="opacity-30">
                {result.length > 0
                  ? `Найдено Результатов: ${totalResultsCount}`
                  : ""}
              </div>
              <div className="opacity-30">{result.length > 0 ? `|` : ""}</div>
              <div
                className="opacity-30 hover:opacity-75 duration-300"
                onClick={() => open()}
              >
                Подозрительный контент
              </div>
            </div>

            <div className="flex w-1/2 h-auto items-center justify-center flex-col gap-6">
              {result.length > 0 ? (
                result.map((item) => {
                  return (
                    <Card
                      key={
                        item.id ?? item.cacheId
                          ? item.cacheId + new Date().valueOf()
                          : Math.random() + new Date().valueOf()
                      }
                      title={item.title}
                      link={item.link}
                      description={item.description ?? item.snippet}
                    />
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex w-1/2 items-center justify-center gap-2">
              <PageNavButton number={1} currentpage={currentPage} />
              <PageNavButton number={2} currentpage={currentPage} />
              <PageNavButton number={3} currentpage={currentPage} />
              <PageNavButton number={4} currentpage={currentPage} />
            </div>
          </div>

          <div className="bg-black/80 w-full text-cyan-50 flex items-center justify-center flex-col py-2 mt-20 relative">
            <div className="absolute left-0 ml-4 flex items-center gap-2">
              <img
                src="https://img.icons8.com/?size=100&id=cngJMh1znKUX&format=png"
                className="w-10 h-10 pointer-events-none"
              />
            </div>
            <div className="text-center font-light text-white/20">
              Все права защищены
            </div>

            <div className="text-center font-light flex gap-2 opacity-100 text-white/20">
              <a
                href="https://github.com/infeibal"
                className="hover:text-white duration-500 "
                target="_blank"
              >
                Fedorov A.S
              </a>
              <a
                href="https://github.com/Tevuu"
                className="hover:text-white duration-500"
                target="_blank"
              >
                Smirnov V.A
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
