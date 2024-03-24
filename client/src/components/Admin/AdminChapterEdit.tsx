import { motion } from 'framer-motion';
import {
  Button,
  SeasonSelect,
  Spinner,
  FormInput,
  TextAreaInput,
  // ImageInput,
} from '../UI-components';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useContext,
  useEffect,
  //  useRef,
  useState,
} from 'react';
import { paths } from '../../constants';
import { ChapterContext } from '../../context/ChaptersContext';
import GetChaptersService from '../../services/GetChaptersService';
import PatchChapterService from '../../services/PatchChapterService';
import GetSeasonService from '../../services/GetSeasonService';
import { TChapter } from '../../types/Item-types';
import { Formik } from 'formik';
import { chapterSchema } from '../../validation/chapterSchema';

const AdminChapterEdit = () => {
  const { setChapters } = useContext(ChapterContext);
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState<TChapter | null>(null);
  const navigate = useNavigate();
  // Images refs and state for image upload and handlers
  /*   const imageProRef = useRef<HTMLInputElement>(null);
  const imageBasesRef = useRef<HTMLInputElement>(null);
  const [filePro, setFilePro] = useState<File | null>(null);
  const [fileBases, setFileBases] = useState<File | null>(null); */
  const { currentSeason } = useParams();
  const [initialValues, setInitialValues] = useState<Omit<TChapter, 'id'>>({
    season: '',
    titlePro: '',
    contentPro: '',
    titleBases: '',
    contentBases: '',
  });

  useEffect(() => {
    const fetchSeason = async () => {
      const fetchedSeason = await GetSeasonService(currentSeason!);
      if (!fetchedSeason) return;
      setSeason(fetchedSeason);
      setInitialValues({
        season: fetchedSeason.season,
        titlePro: fetchedSeason.titlePro,
        contentPro: fetchedSeason.contentPro,
        titleBases: fetchedSeason.titleBases,
        contentBases: fetchedSeason.contentBases,
      });
      setIsLoading(false);
    };

    fetchSeason();
  }, []);

  /*   const onImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'imagePro') {
      setFilePro(event.target.files ? event.target.files[0] : null);
    } else if (event.currentTarget.name === 'imageBases') {
      setFileBases(event.target.files ? event.target.files[0] : null);
    }
  };

  const fileCancelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === 'imagePro') {
      setFilePro(null);
      imageProRef.current && (imageProRef.current.value = '');
    } else if (event.currentTarget.name === 'imageBases') {
      setFileBases(null);
      imageBasesRef.current && (imageBasesRef.current.value = '');
    }
  }; */

  const onChapterSubmitHandler = async (values: Omit<TChapter, 'id'>) => {
    const chapterInput = {
      id: season?.id,
      season: values.season,
      titlePro: values.titlePro,
      contentPro: values.contentPro,
      titleBases: values.titleBases,
      contentBases: values.contentBases,
    };

    const isSuccess = await PatchChapterService(chapterInput);

    if (isSuccess) {
      toast.info('Capítol modificat correctament.');
      const updatedChapters = await GetChaptersService(); // Fetch updated chapters
      setChapters(updatedChapters); // Update app context with the new chapter list
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
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={chapterSchema}
            onSubmit={onChapterSubmitHandler}
          >
            {(formik) => {
              return (
                <form onSubmit={formik.handleSubmit}>
                  <div className='mb-3'>
                    <SeasonSelect
                      label='Selecciona una temporada'
                      name='season'
                      value={formik.values.season}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      check={formik.touched.season && !formik.errors.season}
                      error={
                        formik.touched.season ? formik.errors.season : undefined
                      }
                    />
                    <div className='border-b-2 border-slate-400 mt-4 mb-3'></div>
                    <FormInput
                      label='Títol article secció professional'
                      name='titlePro'
                      type='text'
                      placeholder=''
                      error={
                        formik.touched.titlePro
                          ? formik.errors.titlePro
                          : undefined
                      }
                      check={formik.touched.titlePro && !formik.errors.titlePro}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.titlePro}
                    />
                    <TextAreaInput
                      label="Cos de l'article secció professional"
                      name='contentPro'
                      rows={4}
                      placeholder="Contingut de l'article..."
                      error={
                        formik.touched.contentPro
                          ? formik.errors.contentPro
                          : undefined
                      }
                      check={
                        formik.touched.contentPro && !formik.errors.contentPro
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contentPro}
                    />
                    {/* <ImageInput
                      label='Imatge secció pro'
                      name='imagePro'
                      type='file'
                      placeholder='Puja una imatge...'
                      inputRef={imageProRef}
                      onChange={onImageInputChange}
                      ImageSelected={!!filePro}
                      onCancel={fileCancelHandler}
                      accept='image/*'
                    /> */}
                    <div className='border-b-2 border-slate-400 mt-4 mb-3'></div>
                    <FormInput
                      label='Títol article bases i filial'
                      name='titleBases'
                      type='text'
                      placeholder=''
                      error={
                        formik.touched.titleBases
                          ? formik.errors.titleBases
                          : undefined
                      }
                      check={
                        formik.touched.titleBases && !formik.errors.titleBases
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.titleBases}
                    />
                    <TextAreaInput
                      label="Cos de l'article secció base i filial"
                      name='contentBases'
                      rows={4}
                      placeholder="Contingut de l'article..."
                      error={
                        formik.touched.contentBases
                          ? formik.errors.contentBases
                          : undefined
                      }
                      check={
                        formik.touched.contentBases &&
                        !formik.errors.contentBases
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contentBases}
                    />
                    {/* <ImageInput
                      label='Imatge secció bases i filial'
                      name='imageBases'
                      type='file'
                      placeholder='Puja una imatge...'
                      inputRef={imageBasesRef}
                      onChange={onImageInputChange}
                      ImageSelected={!!fileBases}
                      onCancel={fileCancelHandler}
                      accept='image/*'
                    /> */}
                  </div>
                  <Button
                    type='submit'
                    title='PUBLICAR'
                    onClick={formik.handleSubmit}
                  />
                </form>
              );
            }}
          </Formik>
        )}
      </div>
    </motion.div>
  );
};

export default AdminChapterEdit;
