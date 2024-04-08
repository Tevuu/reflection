import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="flex  flex-col gap-4">
        <div className="text-[80px] font-black">404. Страница не найдена</div>
        <div className="font-semilight text-2xl opacity-30">
          Возможно, она была перемещена или вы ошиблись адрессом.
        </div>
        <Link
          to="/"
          className="font-semilight text-2xl hover:text-3xl duration-200 w-max">
          Перейти на главную
        </Link>
      </div>
    </div>
  );
};
