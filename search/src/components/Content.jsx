import { useState } from "react";
import { ContentCard } from "./ContentCard";

export const Content = ({ modal, setShowModal }) => {
  const [content, setContent] = useState([
    {
      id: 1,
      sitename: "VK",
      sitelink: "fsdfsdfds",
      siteicon: "https://cdn-icons-png.flaticon.com/512/5968/5968835.png",
    },
    {
      id: 2,
      sitename: "Instagram",
      sitelink: "fsdfsdfds",
      siteicon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    },
    {
      id: 3,
      sitename: "Google",
      sitelink: "fsdfsdfds",
      siteicon: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    },
    {
      id: 4,
      sitename: "Vk",
      sitelink: "fsdfsdfds",
      siteicon: "https://vk.com",
    },
    {
      id: 5,
      sitename: "OK",
      sitelink: "fsdfsdfds",
      siteicon: "https://ok.ru",
    },
    {
      id: 6,
      sitename: "Youtube",
      sitelink: "fsdfsdfds",
      siteicon: "https://youtube.com",
    },
    {
      id: 7,
      sitename: "Youtube",
      sitelink: "fsdfsdfds",
      siteicon: "https://ya.ru",
    },
  ]);

  const deleteContent = (index) => {
    setContent(content.filter((item) => item.id !== index));
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
        onClick={handleClose}>
        <div
          className={
            "w-full lg:w-[45%] h-[90%] inset-0 flex justify-center overflow-y-auto"
          }>
          <div
            className={
              "shadow w-full h-auto my-8 flex flex-col gap-2 bg-white rounded-lg"
            }>
            <div className="w-full h-max relative flex items-center justify-center">
              <div className="m-2 opacity-50">Подозрительный контент</div>
              <div>
                <img
                  onClick={() => setShowModal(false)}
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                  className="w-6 h-6 absolute top-[2px] right-0 m-2 opacity-50 hover:opacity-100 duration-300"
                />
              </div>
            </div>
            <div className="h-full overflow-y-auto">
              {content.map((item) => {
                return (
                  <ContentCard
                    key={item.id}
                    sitename={item.sitename}
                    sitelink={item.sitelink}
                    siteicon={item.siteicon}
                    index={item.id}
                    deleteContent={deleteContent}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
