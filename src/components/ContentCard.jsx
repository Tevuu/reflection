export const ContentCard = ({
  localStorageKey,
  siteName,
  siteLink,
  deleteContent,
}) => {
  return (
    <>
      <div className="relative group w-full h-min">
        <a
          className="flex w-full h-min hover:bg-neutral-300 p-2 rounded-sm gap-2 z-2 items-center"
          target="_blank"
          href={siteLink}
        >
          <div className="flex items-center justify-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${
                siteLink.split("//")[1].split("/")[0]
              }&sz=128`}
              className="max-w-6 max-h-6 w-auto rounded-lg bg-center"
            />
          </div>
          <div className="line-clamp-1 max-w-[250px]">{siteName}</div>
          <div className="line-clamp-1 opacity-30 mr-10">{siteLink}</div>
        </a>

        <div
          className="flex absolute right-0 top-[8px] mr-4 z-20 items-end justify-end group-hover:opacity-100 opacity-0 duration-100 cursor-pointer hover:text-red-500"
          onClick={() => {
            deleteContent(localStorageKey);
          }}
        >
          Удалить
        </div>
      </div>
    </>
  );
};
