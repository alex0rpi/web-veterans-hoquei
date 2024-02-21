import { motion } from 'framer-motion';
import { Button } from '../UI-components/Button';
import FormInput from '../UI-components/FormInput';
import TextAreaInput from '../UI-components/TextAreaInput';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { paths } from '../../constants';
import { ChapterContext } from '../../context/ChaptersContext';
import GetChaptersService from '../../services/GetChaptersService';
import SeasonSelect from '../UI-components/SeasonSelect';
import PatchChapterService from '../../services/PatchChapterService';
import GetSeasonService from '../../services/GetSeasonService';
import Spinner from '../UI-components/loading-spinner/Spinner';
import { TChapter } from '../../types/Item-types';

const AdminChapterEdit = () => {
  const { setChapters, chapters } = useContext(ChapterContext);
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState<TChapter | null>(null);
  const navigate = useNavigate();
  const seasonRef = useRef<HTMLSelectElement>(null);
  const titleProRef = useRef<HTMLInputElement>(null);
  const contentProRef = useRef<HTMLTextAreaElement>(null);
  const titleBasesRef = useRef<HTMLInputElement>(null);
  const contentBasesRef = useRef<HTMLTextAreaElement>(null);

  const { currentSeason } = useParams();

  useEffect(() => {
    const fetchSeason = async () => {
      const fetchedSeason = await GetSeasonService(currentSeason!);
      if (!fetchedSeason) return;
      setSeason(fetchedSeason);
      setIsLoading(false);
    };
    const populateChapters = async () => {
      const fetchedChapters = await GetChaptersService();
      setChapters(fetchedChapters);
    };

    if (!chapters || chapters.length === 0) {
      populateChapters();
    }
    fetchSeason();
  }, [chapters, currentSeason, setChapters]);

  const onChapterSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const chapterInput = {
      id: season?.id,
      season: seasonRef.current?.value,
      titlePro: titleProRef.current?.value,
      contentPro: contentProRef.current?.value,
      titleBases: titleBasesRef.current?.value,
      contentBases: contentBasesRef.current?.value,
    };

    const isSuccess = await PatchChapterService(chapterInput);

    if (isSuccess) {
      toast.info('Capítol modificat correctament.');
      const updatedChapters = await GetChaptersService(); // Fetch updated chapters
      setChapters(updatedChapters); // Update context with the new chapter list
      navigate(paths.userChapterList);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 30,
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <h1 className='mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        Edita aquesta temporada
      </h1>
      <div className='mt-6 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        {isLoading ? (
          <>
            <div></div>
            <div className='flex items-center justify-center'>
              <Spinner />
            </div>
            <div></div>
          </>
        ) : (
          <form onSubmit={onChapterSubmitHandler}>
            <div className='mb-3'>
              <SeasonSelect
                label='Selecciona una temporada'
                name='season'
                seasonRef={seasonRef}
                defaultValue={season?.season}
              />
              <div className='border-b-2 border-slate-400 mt-4 mb-3'></div>
              <FormInput
                label='Títol article secció professional'
                name='title-pro'
                type='text'
                placeholder=''
                inputRef={titleProRef}
                defaultValue={season?.titlePro}
              />
              <TextAreaInput
                label="Cos de l'article secció professional"
                name='content-pro'
                rows={4}
                placeholder="Contingut de l'article..."
                inputRef={contentProRef}
                defaultValue={season?.contentPro}
              />
              <div className='border-b-2 border-slate-400 mt-4 mb-3'></div>
              <FormInput
                label='Títol article bases i filial'
                name='title-bases'
                type='text'
                placeholder=''
                inputRef={titleBasesRef}
                defaultValue={season?.titleBases}
              />
              <TextAreaInput
                label="Cos de l'article secció base i filial"
                name='content-bases'
                rows={4}
                placeholder="Contingut de l'article..."
                inputRef={contentBasesRef}
                defaultValue={season?.contentBases}
              />
            </div>
            <Button type='submit' title='DESAR CANVIS' />
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default AdminChapterEdit;
