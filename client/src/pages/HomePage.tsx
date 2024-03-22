import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { easeInOut, motion } from 'framer-motion';
import ScrollTopBtn from '../components/UI-components/ScrollTopBtn';
import {
  ImageSlider,
  Association,
  BoardMembers,
  BookFeatures,
  BookTeasers,
  BookTestimonials,
  ChapterGrid,
  HeaderTitle,
  RelatedLinksSection,
  Location,
  ContactForm,
} from '../components/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import LogoutService from '../services/LogoutService';
import { toast } from 'react-toastify';

type TMainPageProps = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  relatedLinksRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
  scrollUp?: () => void;
};

const HomePage = ({
  homeRef,
  associationRef,
  boardRef,
  bookRef,
  seasonsRef,
  relatedLinksRef,
  locationRef,
  contactRef,
}: TMainPageProps) => {
  const { user, setUser } = useContext(UserContext);
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const onLogoutHandler = async () => {
    const isSuccess = await LogoutService();
    if (isSuccess) {
      setUser({ id: '', name: '', isVerified: false });
      toast.info('Usuari desconnectat.');
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {user.name !== '' && (
        <div className='fixed top-0 right-[13vw] p-4'>
          <h1 className='flex items-center justify-end flex-row text-lg text-right text-gray-600'>
            Bon dia,
            <span className='font-bold text-lg text-right ms-1'>
              {user.name}
            </span>
            <div className='group flex relative'>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className='ms-2 cursor-pointer hover:opacity-95 hover:translate-x-1 transition-all duration-300 ease-in-out'
                onClick={onLogoutHandler}
              />
              <span className='opacity-0 group-hover:opacity-100 transition-opacity bg-primary p-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 mt-2 mx-auto'>
                Surt
              </span>
            </div>
          </h1>
        </div>
      )}
      <HeaderTitle scrollRef={homeRef} />
      <ImageSlider />
      <Association scrollRef={associationRef} />
      <BoardMembers scrollRef={boardRef} />
      <BookFeatures scrollRef={bookRef} />
      <BookTeasers />
      <BookTestimonials />
      <ChapterGrid scrollRef={seasonsRef} />
      <RelatedLinksSection scrollRef={relatedLinksRef} />
      <Location scrollRef={locationRef} />
      <ContactForm scrollRef={contactRef} />
      {backToTopBtn && <ScrollTopBtn onClick={scrollUp} />}
    </motion.div>
  );
};

export default HomePage;
