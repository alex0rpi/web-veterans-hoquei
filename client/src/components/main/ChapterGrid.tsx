import { ChapterCard, Spinner, TitleSection } from '../UI-components';
import { seasonInfos } from '../../data/SeasonInfos';

type componentProps = {
  id: string;
};

const ChapterGrid = ({ id }: componentProps) => {
  const chapters = seasonInfos;

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
    <section id={id}>
      <TitleSection sectionTitle='Temporades recents' />
      <p className='text-web'>
        "Descobreix les temporades més recents de la nostra història. Cada temporada inclou una
        recapitulació redactada per Carles Gallèn, que destaca tant la trajectòria de la secció
        professional com la dels equips de base. Estem treballant en la incorporació de més imatges
        i vídeos per enriquir el contingut."
      </p>

      <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
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
      </div>
    </section>
  );
};

export default ChapterGrid;
