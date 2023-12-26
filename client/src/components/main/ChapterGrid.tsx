import { ChapterCard } from '../UI-components/ChapterCard';
import Spinner from '../UI-components/loading-spinner/Spinner';
import useChapters from '../../hooks/useChapters';

const ChapterGrid = () => {
  const { isLoading, chapters } = useChapters();

  let chapterContent = [
    <ChapterCard
      key={'no-chapters'}
      index={0}
      season={'Sense informació'}
      titlePro={'De moment no tenim cap article.'}
      titleBases={"En breu n'afegirem."}
    />,
  ];

  if (chapters.length > 0) {
    chapterContent = chapters.map((chapter, index) => {
      return (
        <ChapterCard
          key={chapter.id}
          index={index}
          season={chapter.season}
          titlePro={chapter.titlePro}
          titleBases={chapter.titleBases}
        />
      );
    });
  }

  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        <>
          <div></div>
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
          <div></div>
        </>
      ) : (
        chapterContent
      )}
    </section>
  );
};

export default ChapterGrid;
