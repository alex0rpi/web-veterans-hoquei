import { GiHockey } from "react-icons/gi";

type Props = {
  foto?: string;
  season: string;
  titlePro: string;
  titleBases: string;
};

export const ChapterCard = (props: Props) => {
  const evenSeason = +props.season.split("-")[1] % 2 === 0;
  const cardBg = evenSeason ? "bg-slate-400" : "bg-slate-300";
  return (
    <div className={`card block ${cardBg} p-2`}>
      <GiHockey className="fa-2x inline-block" />
      <h1 className="inline text-center text-lg font-bold">{props.season}</h1>
      <h1 className="my-1 text-left text-lg">* {props.titlePro}</h1>
      <h1 className="mb-1 text-left text-lg">* {props.titleBases}</h1>
      <img src="" alt="chapter-foto" className="" />
    </div>
  );
};
