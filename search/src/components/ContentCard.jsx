export const ContentCard = ({
  sitename,
  sitelink,
  siteicon,
  index,
  deleteContent,
}) => {
  return (
    <>
      <div className="relative group w-full h-min">
        <a
          className="flex w-full h-min hover:bg-neutral-300 p-2 rounded-sm gap-2 z-2 items-center"
          target="_blank"
          href={sitelink}>
          <div className="flex items-center justify-center">
            <img
              src={`https://api.statvoo.com/favicon/${
                siteicon.split("//")[1].split("/")[0]
              }`}
              className="max-w-6 max-h-6 w-auto rounded-lg bg-center"
            />
          </div>
          <div>{sitename}</div>
          <div className="opacity-30">{sitelink}</div>
        </a>
        <div
          className="flex absolute right-0 top-[10px] mr-4 z-20 items-end justify-end group-hover:opacity-100 opacity-0 duration-100 cursor-pointer hover:text-red-500"
          onClick={() => {
            deleteContent(index);
          }}>
          Удалить
        </div>
      </div>
    </>
  );
};
