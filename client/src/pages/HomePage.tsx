import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';

import {
  HeaderTitle,
  Association,
  BoardMembers,
  BookTeasers,
  // BookFeatures,
  // BookTestimonials,
  // ChapterGrid,
  // RelatedLinksSection,
  // Location,
  // ContactForm,
  PresidentGreet,
} from '../components/main';
import { fotos } from '../assets/carouselPictures';
import { ScrollTopBtn, ImageSlider, Spinner } from '../components/UI-components';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const BookFeatures = lazy(() =>
    import('../components/main').then((module) => ({ default: module.BookFeatures }))
  );
  const ChapterGrid = lazy(() =>
    import('../components/main').then((module) => ({ default: module.ChapterGrid }))
  );
  const RelatedLinksSection = lazy(() =>
    import('../components/main').then((module) => ({ default: module.RelatedLinksSection }))
  );
  const Location = lazy(() =>
    import('../components/main').then((module) => ({ default: module.Location }))
  );
  const ContactForm = lazy(() =>
    import('../components/main').then((module) => ({ default: module.ContactForm }))
  );

  const fallBackSpinner = (
    <div className='flex items-center justify-center'>
      <Spinner />
    </div>
  );

  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });

  const [backToTopBtn, setBackToTopBtn] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        !isMdScreenOrLarger && setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, [isMdScreenOrLarger]);

  // prettier-ignore
  return (
    <>
      <div id="association"><HeaderTitle /></div>
      <ImageSlider pictures={fotos} />
      <Association />
      <PresidentGreet id="presidentGreeting" />
      <BoardMembers id="boardMembers" />
      <BookTeasers id="bookSection" />
      <Suspense fallback={fallBackSpinner}>
        <BookFeatures />
        <ChapterGrid id="seasonsSection" />
        <RelatedLinksSection id="linksSection" />
        <Location id="locationSection" />
        <ContactForm id="contactSection" />
      </Suspense>
      {backToTopBtn && <ScrollTopBtn onClick={scrollUp} />}
    </>
  );
};

export default HomePage;
