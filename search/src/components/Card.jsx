export const Card = ({ title, link, description }) => {
  return (
    <div className="bg-neutral-200 w-full min-w-[300px] h-max rounded-tl-3xl rounded-br-3xl p-4 relative hover:bg-neutral-300 duration-300 group">
      <div className="absolute right-[20px] top-[-15px]">
        <div className="absolute z-10 top-[-5px] right-[-30px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10579/10579555.png"
            onClick={() => console.log("p")}
            title="Добавить в подозрительный контент"
            className=" duration-300 cursor-pointer max-w-10 max-h-10 object-center opacity-0 group-hover:opacity-100"></img>
        </div>

        <div className="absolute z-0">
          <img
            src={
              link.includes("https")
                ? `https://api.statvoo.com/favicon/${
                    link.split("//")[1].split("/")[0]
                  }`
                : ""
            }
            className="max-w-8 max-h-8 ease-out duration-300 transition-all object-center rounded-lg opacity-100 group-hover:opacity-0"
          />
        </div>
      </div>
      <div className="font-bold text-lg">{title}</div>
      <a
        className="line-clamp-1 opacity-50 underline font-light "
        href={link}
        target="_blank">
        {link}
      </a>
      <div className="">{description}</div>
    </div>
  );
};
