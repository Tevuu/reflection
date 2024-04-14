import { useEffect, useState } from "react";
import { ContentCard } from "./ContentCard";
import { jsPDF } from "jspdf";
import { font } from "../../public/font";

export const Content = ({ modal, setShowModal }) => {
  const [content, setContent] = useState([]);

  function clearLocalStorage() {
    localStorage.clear();

    var archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

    for (; (key = keys[i]); i++) {
      archive.push({ key: key, value: localStorage.getItem(key) });
    }

    setContent(archive);
  }

  function downloadPdf() {
    const doc = new jsPDF();
    const myFont = font;

    doc.addFileToVFS("MyFont.ttf", myFont);
    doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.setFont("MyFont");

    doc.setFontSize(16);
    doc.text("Отчет сайтов с подозрительным контентом", 50, 14).setFontSize(12);

    let temp = 14;

    content.forEach((item, index) => {
      temp += 14;
      if (!(((index + 1) / 10) % 2)) {
        doc.addPage();
        temp = 14;
      }

      doc.text(
        `${index + 1}. ${item.key.split("%54")[0]}\n(${
          item.key.split("%54")[1]
        })`,
        10,
        temp
      );
    });

    doc.save("Отчет.pdf");
  }

  useEffect(() => {
    var archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

    for (; (key = keys[i]); i++) {
      archive.push({ key: key, value: localStorage.getItem(key) });
    }

    setContent(archive);
  }, [modal]);

  const deleteContent = (localStorageKey) => {
    console.log(localStorageKey);
    localStorage.removeItem(localStorageKey);

    var archive = [],
      keys = Object.keys(localStorage),
      i = 0,
      key;

    for (; (key = keys[i]); i++) {
      archive.push({ key: key, value: localStorage.getItem(key) });
    }

    setContent(archive);
  };

  if (!modal) return null;
  const handleClose = (e) => {
    if (e.target.id === "exit") {
      setShowModal(false);
      var body = document.querySelector("body");
      body.style.setProperty("--var-overflow", "auto");
    }
  };

  return (
    <>
      <div
        className={
          "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        }
        id="exit"
        onClick={handleClose}
      >
        <div
          className={
            "w-full lg:w-[45%] h-[90%] inset-0 flex justify-center overflow-y-auto"
          }
        >
          <div
            className={
              "shadow w-full h-auto my-8 flex flex-col gap-2 bg-white rounded-lg"
            }
          >
            <div className="w-full h-max relative flex items-center justify-center">
              <div className="m-2 opacity-50">Подозрительный контент</div>
              <div>
                <img
                  title="Отчистить весь список"
                  className="w-6 h-6 absolute top-[2px] right-[72px] m-2 opacity-70 hover:opacity-100 duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/14026/14026545.png"
                  alt="Отчистить весь список"
                  onClick={() => clearLocalStorage()}
                />
                <img
                  title="Сохранить отчет в PDF"
                  className="w-6 h-6 absolute top-[2px] right-9 m-2 opacity-70 hover:opacity-100 duration-300"
                  src="https://cdn-icons-png.flaticon.com/512/3318/3318404.png"
                  alt="Сохранить отчет в PDF"
                  onClick={() => downloadPdf()}
                />
                <img
                  title="Закрыть"
                  onClick={() => setShowModal(false)}
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                  className="w-6 h-6 absolute top-[2px] right-0 m-2 opacity-50 hover:opacity-100 duration-300"
                />
              </div>
            </div>
            <div className="h-full overflow-y-auto">
              {content.length
                ? content.map((item) => {
                    return (
                      <ContentCard
                        key={item.value}
                        siteName={item.key.split("%54")[0]}
                        siteLink={item.key.split("%54")[1]}
                        deleteContent={deleteContent}
                        localStorageKey={item.key}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
