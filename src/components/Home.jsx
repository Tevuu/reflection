import { Card } from "./Card";
import { useState } from "react";
import { Search } from "./Search";
import { PageNavButton } from "./UI/PageNavButton";
import { v4 as uuidV4 } from "uuid";

export const Home = ({ open }) => {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [request, setRequest] = useState("");

  function changeResult(data) {
    setResult([...data]);
  }

  function getRequest(data) {
    setRequest(data);
  }

  async function changeTotalResultsCount(response) {
    await setTotalResultsCount(+response.queries.request[0].totalResults);
  }

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex flex-col items-center w-full justify-between overflow-auto">
          <div className="flex w-[90%] flex-col justify-center items-center mt-20 gap-4">
            <h1 className="text-6xl mb-6 font-extralight text-neutral-700 [text-shadow:_0_4px_0_rgb(0_0_0_/_20%)]">
              О Т Р А Ж Е Н И E
            </h1>

            <Search
              currentPage={currentPage}
              changeResult={changeResult}
              changeTotalResultsCount={changeTotalResultsCount}
              resultsCountOfCurrentPage={result.length}
              result={result}
              getRequest={getRequest}
            />
            <div className="flex flex-row gap-4 text-sm lg:text-base cursor-default">
              <div className="opacity-30">
                {result.length > 0
                  ? `Найдено Результатов: ${totalResultsCount}`
                  : ""}
              </div>
              <div className="cursor-default opacity-30">
                {result.length > 0 ? `|` : ""}
              </div>
              <div
                className="opacity-30 hover:opacity-75 duration-300 cursor-pointer"
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
                      id={uuidV4()}
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
              {result.length > 0 ? (
                <div className="flex w-1/2 items-center justify-center gap-2">
                  <PageNavButton
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    request={request}
                    result={result}
                    changeResult={changeResult}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="bg-[#EBEBEF] rounded-t-2xl w-full text-cyan-50 text-lg flex gap-2 items-center justify-center flex-col py-4 mt-20 relative">
            <div className="text-center font-light text-neutral-500">
              Все права защищены
            </div>

            <div className="text-center font-light flex gap-2 opacity-100 text-neutral-500">
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
