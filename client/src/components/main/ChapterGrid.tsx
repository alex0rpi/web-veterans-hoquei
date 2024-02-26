import { ChapterCard, Spinner } from '../UI-components';
import useChapters from '../../hooks/useChapters';

type TSeasonsProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const ChapterGrid = ({ scrollRef }: TSeasonsProps) => {
  const { chapters } = useChapters();

  let chapterContent = [
    <ChapterCard
      key={'no-chapters'}
      index={0}
      season={'Sense informació'}
      titlePro={'De moment no tenim cap article.'}
      titleBases={"En breu n'afegirem."}
      noLink={true}
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
    <section ref={scrollRef}>
      <h4 className='mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        TEMPORADES RECENTS
      </h4>
      <section className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {!chapters || chapters.length === 0 ? (
          <>
            <div></div>
            <div className='flex items-center justify-center'>
              <Spinner />
            </div>
            <div></div>
          </>
        ) : (
          chapterContent
        )}
      </section>
    </section>
  );
};

export default ChapterGrid;
