import { motion } from 'framer-motion';
import { Button } from '../../UI-components/Button';
import FormInput from '../../UI-components/FormInput';
import TextAreaInput from '../../UI-components/TextAreaInput';
import CreateChapterService from '../../../services/CreateChapterService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useRef } from 'react';
import { paths } from '../../../constants';
import { ChapterContext } from '../../../context/ChaptersContext';
import GetChaptersService from '../../../services/GetChaptersService';
import SeasonSelect from '../../UI-components/SeasonSelect';

const NewChapterForm = () => {
  const { setChapters } = useContext(ChapterContext);
  const navigate = useNavigate();
  const seasonRef = useRef<HTMLSelectElement>(null);
  const titleProRef = useRef<HTMLInputElement>(null);
  const contentProRef = useRef<HTMLTextAreaElement>(null);
  const titleBasesRef = useRef<HTMLInputElement>(null);
  const contentBasesRef = useRef<HTMLTextAreaElement>(null);

  const onChapterSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const chapterInput = {
      season: seasonRef.current?.value,
      titlePro: titleProRef.current?.value,
      contentPro: contentProRef.current?.value,
      titleBases: titleBasesRef.current?.value,
      contentBases: contentBasesRef.current?.value,
    };

    console.log('type of season: ', typeof chapterInput.season);

    const isSuccess = await CreateChapterService(chapterInput);

    if (isSuccess) {
      toast.info('Capítol creat correctament.');
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
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Crea un nou capítol
      </h1>
      <div className="mt-6 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
        <form onSubmit={onChapterSubmitHandler}>
          <div className="mb-3">
            <SeasonSelect
              label="Selecciona una temporada"
              name="season"
              seasonRef={seasonRef}
            />
            <div className="border-b-2 border-slate-400 mt-4 mb-3"></div>
            <FormInput
              label="Títol article secció professional"
              name="title-pro"
              type="text"
              placeholder=""
              inputRef={titleProRef}
            />
            <TextAreaInput
              label="Cos de l'article secció professional"
              name="content-pro"
              rows={4}
              maxLength={6000}
              placeholder="Contingut de l'article..."
              inputRef={contentProRef}
            />
            <div className="border-b-2 border-slate-400 mt-4 mb-3"></div>
            <FormInput
              label="Títol article bases i filial"
              name="title-bases"
              type="text"
              placeholder=""
              inputRef={titleBasesRef}
            />
            <TextAreaInput
              label="Cos de l'article secció base i filial"
              name="content-bases"
              rows={4}
              maxLength={6000}
              placeholder="Contingut de l'article..."
              inputRef={contentBasesRef}
            />
          </div>
          <Button type="submit" title="PUBLICAR CAPÍTOL" />
        </form>
      </div>
    </motion.div>
  );
};

export default NewChapterForm;
