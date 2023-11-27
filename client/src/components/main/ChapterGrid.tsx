import { ChapterCard } from "../utils/ChapterCard";
import chapters from "../../data/chapters.json";

const ChapterGrid = () => {
  console.log("chapters: ", chapters);

  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {chapters.map((chapter, index) => {
        return (
          <ChapterCard
            key={index}
            season={chapter.season}
            titlePro={chapter.titlePro}
            titleBases={chapter.titleBases}
          />
        );
      })}
    </section>
  );
};

export default ChapterGrid;
