import { ChapterCard } from '../../UI-components/ChapterCard';
import chapters from '../../../data/chapters.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

const AdminChapters = () => {
  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {chapters.map((chapter, index) => {
        return (
          <div className="flex flex-col border-solid border-slate-400">
            <ChapterCard
              key={index}
              season={chapter.season}
              titlePro={chapter.titlePro}
              titleBases={chapter.titleBases}
            />
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faXmark}
                size="2xl"
                className="cursor-pointer px-8 hover:scale-95 active:scale-100"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AdminChapters;
